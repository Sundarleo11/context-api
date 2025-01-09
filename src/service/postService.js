import axios from 'axios';

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

const getposts = () => api.get('/posts');

export { getposts }; // Named export