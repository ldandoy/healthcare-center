import axios from 'axios';

const baseUrl = 'http://localhost:1337/api';

export const getAPI = async (url) => {
    const token = localStorage.getItem('jwt');

    return await axios.get(`${baseUrl}${url}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const PostAPI = async (url, form) => {
    const token = localStorage.getItem('jwt');

    return await axios.post(`${baseUrl}${url}`, {data: form}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}