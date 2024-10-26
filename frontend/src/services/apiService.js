import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const createUser = async (userData) => {
    const response = await api.post('/users/signup', userData);
    return response.data;
};
