import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [['zh-CN', '中文']],
  title: 'hong-react-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config

  base: '/hong-react-ui',
  publicPath: '/hong-react-ui/',
  exportStatic: {},
  alias: {
    'hong-react-ui/dist/index.css': '../index.less',
  },
});
