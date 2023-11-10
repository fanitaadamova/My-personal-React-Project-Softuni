const baseURL = 'http://localhost:3030/jsonstore/technique/';

export const getAll = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getAllLaptops = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();

    const data = Object.values(result).filter( product => product.type == 'Лаптоп');

    return data;
};

export const getAllPhones = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();

    const data = Object.values(result).filter( product => product.type == 'Телефон');

    return data;
};

export const getAllTablets = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();

    const data = Object.values(result).filter( product => product.type == 'Таблет');

    return data;
};

export const getAllSmartWatches = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();

    const data = Object.values(result).filter( product => product.type == 'Смарт часовник');

    return data;
};

export const getAllAccessories = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();

    const data = Object.values(result).filter( product => product.type == 'Аксесоар');

    return data;
};


export const getLastTree = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();

    const data = Object.values(result).slice(-3);
    
    return data;
};

export const getOne = async (productId) => {
    const response = await fetch(`${baseURL}/${productId}`);
    const result = await response.json();

    return result;
};