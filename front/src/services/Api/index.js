import axios from 'axios';

const AUTH = axios.create({
    baseURL: 'https://apinodecad.herokuapp.com/'
});
const API_PRODUTO = axios.create({
    baseURL: 'https://localhost:5001/api/'
});

export { AUTH, API_PRODUTO };