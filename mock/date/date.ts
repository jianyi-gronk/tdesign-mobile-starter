export default [
    // 用户登录接口
    {
        url: '/api/date',//请求地址
        method: 'get',//请求方式
        response: ({ body }) => {
            return { code: 200, data: { a:1 } }
        },
    }
]