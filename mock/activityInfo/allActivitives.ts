const allActivitives = {
  label: '全部活动',
  data: [
    {
      title: '2021 SICC服务设计创....',
      date: '2021年3月16日',
      status: '待参加',
      comment: '去评价',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png'
    },
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
    url: '/api/allActivitives', //请求地址
    method: 'get', //请求方式
    response: () => {
      return { code: 200, data: { allActivitives } };
    }
  }
];
