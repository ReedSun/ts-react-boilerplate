import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension';
import commonjs from '@rollup/plugin-commonjs';
import { emptyDir } from 'rollup-plugin-empty-dir';
import path from 'path';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import zip from 'rollup-plugin-zip';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/manifest.ts',
  output: {
    chunkFileNames: path.join('chunks', '[name]-[hash].js'),
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': isProduction
        ? JSON.stringify('production')
        : JSON.stringify('development'),
    }),
    chromeExtension(),
    // Adds a Chrome extension reloader during watch mode
    simpleReloader(),
    resolve(),
    commonjs(),
    typescript(),
    // Empties the output dir before a new build
    emptyDir(),
    // Outputs a zip file in ./releases
    isProduction && zip({ dir: 'releases' }),
  ],
};
