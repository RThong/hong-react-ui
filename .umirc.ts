import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [['zh-CN', '中文']],
  title: 'hong-react-ui',
  favicon: '/hong-react-ui/logo.jpg',
  logo: '/hong-react-ui/logo.jpg',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config

  base: '/hong-react-ui',
  publicPath: '/hong-react-ui/',
  exportStatic: {},
  alias: {
    'hong-react-ui/dist/index.css': '../index.less',
  },
  targets: {
    ie: 11,
  },
  polyfill: {
    imports: [
      'element-remove', // Dom Api没有自动添加polyfill   需要手动添加
      'babel-polyfill',
    ],
  },
});
