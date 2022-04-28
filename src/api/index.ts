import axios from 'axios';

//пришлось использовать http из-за бага в Chrome
export const API_URL = 'http://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_URL,
});

export default api;