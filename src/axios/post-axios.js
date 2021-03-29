import axios from 'axios';

const postsApi = 'https://simple-blog-api.crew.red/'

export default axios.create({ baseURL: postsApi });
