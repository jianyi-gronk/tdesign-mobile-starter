export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      unitPrecision: 5,
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 12,
    },
  },
};
