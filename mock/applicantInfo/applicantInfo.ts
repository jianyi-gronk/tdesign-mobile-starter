const info = {
  defaultState: true,
  name: '蔡宣轩',
  birthday: '1994-9-27',
  phone: '18899998888',
  idCard: '363738199409271816',
  email: 'caixuanxuan@163.com',
  career: '设计师/艺术从业者',
  friends: [
    {
      name: 'Allen',
      imgUrl: 'src/assets/images/avatar/small/Allen.png',
      uid: '100002'
    },
    {
      name: 'Nick',
      imgUrl: 'src/assets/images/avatar/small/Nick.png',
      uid: '100003'
    },
    {
      name: 'Jackey',
      imgUrl: 'src/assets/images/avatar/small/Jacky.png',
      uid: '100004'
    },
    {
      name: 'Eric',
      imgUrl: 'src/assets/images/avatar/small/Eric.png',
      uid: '100005'
    },
    {
      name: 'Johnson',
      imgUrl: 'src/assets/images/avatar/small/Johnson.png',
      uid: '100006'
    }
  ]
};
export default [
  // 报名人信息接口
  {
    url: '/api/applicantInfo', //请求地址
    method: 'get', //请求方式
    response: () => {
      return { code: 200, data: { info } };
    }
  }
];
