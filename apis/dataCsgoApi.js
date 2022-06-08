import axios from 'axios';

export default axios.create({
    baseURL: 'https://hltv-api.vercel.app/'
});