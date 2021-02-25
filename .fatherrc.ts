export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: 'hong-react-ui',
    globals: {
      react: 'React',
    },
  },
  extractCSS: true,
};
