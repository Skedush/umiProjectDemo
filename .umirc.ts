import { defineConfig } from 'umi';
import pageRoutes from './config/router.config';
import { IConfig } from 'umi-types';
const config: IConfig = {
  routes: pageRoutes,
};

export default defineConfig(config);
