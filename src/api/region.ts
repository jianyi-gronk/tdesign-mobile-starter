import request from '../utils/request';
export const reqRegionData = (url: string) => {
  return request.get(url);
};
