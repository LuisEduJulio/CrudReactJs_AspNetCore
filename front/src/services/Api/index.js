import axios from 'axios';

const AUTH = axios.create({
    baseURL: process.env.API_AUTH
});
const API_PRODUTO = axios.create({
    baseURL: 'https://localhost:5001/api/'
});

export { AUTH, API_PRODUTO };