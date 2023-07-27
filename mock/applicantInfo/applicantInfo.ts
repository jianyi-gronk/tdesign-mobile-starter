const info = {
  defaultState: true,
  name: '蔡宣轩',
  birthday: '1994-9-27',
  phone: '18899998888',
  idCard: '363738199409271816',
  email: 'caixuanxuan@163.com',
  career: '设计师/艺术从业者'
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
