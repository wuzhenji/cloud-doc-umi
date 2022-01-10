import { defineConfig } from 'umi';

export default defineConfig({
  base: './',
  publicPath: './',
  history: { type: 'hash' },
  outputPath: 'build',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
