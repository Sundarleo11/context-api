import axios from 'axios';

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

const getposts = () => api.get('/posts');
const deletePost=(id)=>api.delete(`/posts/${id}`)

export { getposts,deletePost }; // Named export