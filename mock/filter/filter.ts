const fields = [
  {
    id: 'f001',
    field: 'IT互联网',
    checked: false
  },
  {
    id: 'f002',
    field: '艺术设计',
    checked: false
  },
  {
    id: 'f003',
    field: '科技',
    checked: false
  },
  {
    id: 'f004',
    field: '电商',
    checked: false
  },
  {
    id: 'f005',
    field: '教育',
    checked: false
  },
  {
    id: 'f006',
    field: '医疗健康',
    checked: false
  },
  {
    id: 'f007',
    field: '心理学',
    checked: false
  },
  {
    id: 'f008',
    field: '摄影',
    checked: false
  },
  {
    id: 'f009',
    field: '教育',
    checked: false
  }
];
const forms = [
  {
    id: 'o001',
    form: '讲座',
    checked: true
  },
  {
    id: 'o001',
    form: '展览',
    checked: false
  },
  {
    id: 'o001',
    form: '工作坊',
    checked: false
  }
];
export default [
  {
    url: '/api/fields',
    method: 'get',
    response: () => {
      return { code: 200, data: { data: fields } };
    }
  },
  {
    url: '/api/forms',
    method: 'get',
    response: () => {
      return { code: 200, data: { data: forms } };
    }
  }
];
