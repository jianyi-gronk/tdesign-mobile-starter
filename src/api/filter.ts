import request from '../utils/request';

export const getFields = () => request.get('/fields');
export const getForms = () => request.get('/forms');
