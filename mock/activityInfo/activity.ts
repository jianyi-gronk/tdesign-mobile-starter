const activity = {
  uuid: '123',
  name: '2021 SICC服务设计创新大会',
  date: '2021年3月16日',
  site: '深圳市腾讯滨海大厦',
  members: [
    {
      username: '蔡宣轩',
      age: 29,
      identity: '设计师/艺术从业者',
      uid: '10001'
    }
  ]
};

export default [
  // 活动信息接口
  {
    url: '/api/activityDetails', //请求地址
    method: 'get', //请求方式
    response: () => {
      return { code: 200, data: { activity } };
    }
  }
];
