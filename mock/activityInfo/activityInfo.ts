const MyInfo = {
  userName: '蔡丽轩',
  age: 29,
  position: '设计/艺术从业者',
  img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png'
};

const allActivity = {
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

const awaitActivity = {
  label: '待参加',
  data: [
    {
      title: '2021 SICC服务设计创....',
      date: '2021年3月16日',
      status: '待参加',
      comment: '去评价',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png'
    }
  ]
};
export default [
  // 我的页面信息入口
  {
    url: '/api/MyInfo', //请求地址
    method: 'get', //请求方式
    response: () => {
      return { code: 200, data: { MyInfo } };
    }
  },
  {
    url: '/api/allActivity', //请求地址
    method: 'get', //请求方式
    response: () => {
      return { code: 200, data: { allActivity } };
    }
  },
  {
    url: '/api/finishActivity', //请求地址
    method: 'get', //请求方式
    response: () => {
      return { code: 200, data: { finishActivity } };
    }
  },
  {
    url: '/api/awaitActivity', //请求地址
    method: 'get', //请求方式
    response: () => {
      return { code: 200, data: { awaitActivity } };
    }
  }
];
