import request from '../../utils/request';
export const reqApplicantInfoData = (url: string) => {
  return request.get(url);
};
