import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';
export default ({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        localEnabled: command === 'serve'
      })
    ],
    define: {
      'process.env': process.env
    }
    // 如何在手机上预览或访问vite+vue: https://zhuanlan.zhihu.com/p/600323447
    // server: {
    //   host: '192.168.43.138',
    //   port: 3344
    // }
  };
};
