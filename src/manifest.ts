import { ManifestV3 } from 'rollup-plugin-chrome-extension';

const manifest: ManifestV3 = {
  action: { default_popup: 'pages/popup/index.html' },
  background: {
    service_worker: 'service_worker.ts',
  },
  content_scripts: [
    {
      js: ['content_scripts.ts'],
      matches: ['https://*.example.com/*'],
    },
  ],
  manifest_version: 3,
};

export default manifest;
