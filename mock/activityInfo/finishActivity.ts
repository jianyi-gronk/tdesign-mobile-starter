const finishActivity = {
  label: '已完成',
  data: [
    {
      title: '2022 SICC服务设计创....',
      date: '2022年3月16日',
      status: '已完成',
      comment: '去评价',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png'
    }
  ]
};

export default [
  // 报名人信息接口
  {
    url: '/api/finishActivity', //请求地址
    method: 'get', //请求方式
    response: () => {
      return { code: 200, data: { finishActivity } };
    }
  }
];
