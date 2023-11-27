import * as request from '../library/request';

const baseURL = 'http://localhost:3030/data/purchases';


export const purchase = (productId, userId) => request.post(`${baseURL}`, { productId, userId });

export const getALLPuchases = () => request.get(`${baseURL}`);

export const getBuyersOfProduct = async (productId) => {
    const query = encodeURIComponent(`productId="${productId}"`);

    const result = await request.get(`${baseURL}?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));

    return result;
};

//NEW endpoint
export const getPurchasesproductIdsByUser = async (userId) => {
    const result = await request.get(`${baseURL}`)
        .then(res => res
            .filter(x => x._ownerId == userId)
            .map(x => x.productId));

    return result;
};
