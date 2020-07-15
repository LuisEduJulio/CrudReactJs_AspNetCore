import axios from 'axios';

const AUTH = axios.create({
    baseURL: API_AUTH
});
const API_PRODUTO = axios.create({
    baseURL: 'https://localhost:5001/api/'
});

export { AUTH, API_PRODUTO };