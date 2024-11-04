import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const fetchDogProducts = () => api.get('/products/dogs');


