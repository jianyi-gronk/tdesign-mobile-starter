import request from '../utils/request';
export const getUserdata = () => {
  return request.get('/user');
};
export const getActivity = () => {
  return request.get('/activity');
};
