import * as request from '../library/request';

const baseURL = 'http://localhost:3030/data';


export const purchase = (userId, productId) => request.post(`${baseURL}/purchases`, {userId, productId});

export const getALLPuchases = () => request.get(`${baseURL}/purchases`);


// export const getProductPurchase = async (productId) => {
//     const query = encodeURIComponent(`productId="${productId}"`);
    
//     const result = await  request.get(`${baseURL}/purchases?select=userId&where=${query}`)
//         .then(res => res.map(x => x.userId));

//         return result;
// };