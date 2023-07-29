const MyInfo = {
  userName: '蔡丽轩',
  age: 29,
  position: '设计/艺术从业者',
  img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png'
};

export default [
  // 我的页面信息入口
  {
    url: '/api/myInfo', //请求地址
    method: 'get', //请求方式
    response: () => {
      return { code: 200, data: { MyInfo } };
    }
  }
];
