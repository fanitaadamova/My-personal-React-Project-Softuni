import * as request from '../library/request';

const baseURL = 'http://localhost:3030/data';


export const purchase = (productId, userId) => request.post(`${baseURL}/purchases`, {productId, userId});

export const getALLPuchases = () => request.get(`${baseURL}/purchases`);

export const getBuyersOfProduct = async (productId) => {
    const query = encodeURIComponent(`productId="${productId}"`);
    
    const result = await  request.get(`${baseURL}/purchases?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));

        return result;
};