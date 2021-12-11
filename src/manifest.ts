import { ManifestV3 } from 'rollup-plugin-chrome-extension';

const manifest: ManifestV3 = {
  action: { default_popup: 'pages/popup/index.html' },
  background: {
    service_worker: 'service_worker.ts',
  },
  content_scripts: [
    {
      css: ['content_script.css'],
      js: ['content_script.ts'],
      matches: ['*://*.baidu.com/*'],
    },
  ].map(({ css = [], js, matches }) => ({
    css: css.map((path) => `content_scripts/${path}`),
    js: js.map((path) => `content_scripts/${path}`),
    matches,
  })),
  manifest_version: 3,
};

export default manifest;
