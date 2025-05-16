import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://ubiquitous-giggle-9ggx6rjg6p9fx9gq-3000.app.github.dev/api/produtos',
    timeout: 5000
});