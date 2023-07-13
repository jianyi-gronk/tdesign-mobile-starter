module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 375px 设计稿下，1rem 等于 37.5px
      propList: ['*'],
      unitPrecision: 5, // 保留 5 位小数
      selectorBlackList: [], // 忽略的选择器，保持为原 px 值
      replace: true,
      mediaQuery: false,
      minPixelValue: 12, // 小于 12px 不转换
    },
  },
};
