/*
 * File: manifest.ts
 * Project: @extend-chrome/ts-react-boilerplate
 * File Created: Thursday, 2021-11-25 17:08:26
 * Author: ReedSun (reedsun@shanjing-inc.com)
 * -----
 * Last Modified: Saturday, 2021-11-27 16:33:04
 * Modified By: ReedSun (reedsun@shanjing-inc.com)
 * -----
 * Copyright 2013 - 2021, Qingdao Shanjing Information Technology Co., Ltd.
 */
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
