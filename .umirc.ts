import { defineConfig } from 'umi';
import pageRoutes from './config/router.config';
import { IConfig } from 'umi-types';
import slash from 'slash2';
import path, { resolve } from 'path';

const config: IConfig = {
  define: {
    API_PREFIX: 'http://192.168.70.10:20002', //集成测试服务器
  },
  routes: pageRoutes,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
  ],
};

export default defineConfig(config);
