import request from '../utils/request';
export const reqActivityDetailInfo = () => {
  return request.get('/activityDetails');
};
