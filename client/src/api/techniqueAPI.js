import * as request from '../library/request';

const baseURL = 'http://localhost:3030/data/technique';


export const getAll = async () => {
    const result = await request.get(baseURL);

    return Object.values(result);
};

export const getAllLaptops = async () => {
    const laptop = 'Лаптоп';
    const query = new URLSearchParams({
        where: `type="${laptop}"`,
    });

    const result = await request.get(`${baseURL}?${query}`);
 //  const result = await request.get(`${baseURL}?where=type%3D%22Лаптоп%22`);
    return Object.values(result);
};

export const getAllPhones = async () => {

    const phone = 'Телефон';
    const query = new URLSearchParams({
        where: `type="${phone}"`,
    });

    const result = await request.get(`${baseURL}?${query}`);

    return Object.values(result);
};

export const getAllTablets = async () => {

    const tablet = 'Таблет';
    const query = new URLSearchParams({
        where: `type="${tablet}"`,
    });

    const result = await request.get(`${baseURL}?${query}`);

    return Object.values(result);
};

export const getAllSmartWatches = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();

    const data = Object.values(result).filter(product => product.type == 'Смарт часовник');
    return data;
};

export const getAllAccessories = async () => {
    const accessore = 'Аксесоар';
    const query = new URLSearchParams({
        where: `type="${accessore}"`,
    });

    const result = await request.get(`${baseURL}?${query}`);

    return Object.values(result);
};

//TODO: да фактурирам с qyery string
export const getLastTree = async () => {
    const result = await request.get(baseURL);
    const data = result.slice(-3);
    return data;
};

export const getOne = async (productId) => {
    const result = await request.get(`${baseURL}/${productId}`);

    return result;
};

export const create = async (productData) => {
    const result = await request.post(baseURL, productData);

    return result;
};

export const remove = async (productId) => {
    const result = await request.remove(`${baseURL}/${productId}`);

    return result;
};