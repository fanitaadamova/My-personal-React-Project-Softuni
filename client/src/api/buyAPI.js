import * as request from '../library/request';

const baseURL = 'http://localhost:3030/data';

export const buy = (userId, ProductId) => request.post(`${baseURL}/purchases`, {userId, ProductId});