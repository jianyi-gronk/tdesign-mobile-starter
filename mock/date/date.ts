export default [
  // 用户登录接口
  {
    url: '/api/date', //请求地址
    method: 'get', //请求方式
    response: ({ body }) => {
      return { code: 200, data: { a: 1 } };
    }
  },
  {
    url: '/api/user/', //请求地址
    method: 'get', //请求方式
    response: ({ body }) => {
      return {
        code: 200,
        data: {
          username: '蔡宣轩',
          age: 29,
          identity: '设计师/艺术从业者',
          uid: '001',
          friends: [
            {
              name: 'Allen',
              imgUrl: 'src/assets/images/avatar/small/Allen.png'
            },
            {
              name: 'Nick',
              imgUrl: 'src/assets/images/avatar/small/Nick.png'
            },
            {
              name: 'Jackey',
              imgUrl: 'src/assets/images/avatar/small/Jacky.png'
            },
            {
              name: 'Eric',
              imgUrl: 'src/assets/images/avatar/small/Eric.png'
            },
            {
              name: 'Johnson',
              imgUrl: 'src/assets/images/avatar/small/Johnson.png'
            }
          ]
        }
      };
    }
  }
];
