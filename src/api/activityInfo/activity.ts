import request from '../../utils/request';
export const reqActivityInfo = (url: string) => {
  return request.get(url);
};
