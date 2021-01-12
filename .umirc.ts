import { resolve } from 'path';
import { defineConfig } from 'umi';
import { IConfig } from 'umi-types';
import pageRoutes from './config/router.config';

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
  alias: {
    '@': resolve(__dirname, './src/'),
  },
};

export default defineConfig(config);
