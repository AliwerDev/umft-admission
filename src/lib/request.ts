import axios from 'axios';
import { get, isEmpty } from 'lodash';
import { getSession } from 'next-auth/react';
import toast from 'react-hot-toast';

const request = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

request.interceptors.request.use(
    async function (config) {
        const session = await getSession(); // NextAuth sessiyasidan tokenni olish

        const token = session?.user?.token;

        if (token) {
            config.headers['token'] = token;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

// Add a response interceptor
request.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        const errorMessage = get(error, 'response.data.message', null);

        if (errorMessage === 'Invalid token!') {
            // if (window) window.location.href = '/auth/signin';
            return;
        }

        if (!errorMessage) {
            const errors = get(error, 'response.data.errors', {});
            if (!isEmpty(errors)) Object.values(errors).forEach((err) => Array.isArray(err) && toast.error(err[0]));
            else toast.error('Xatolik yuz berdi');
        } else {
            toast.error(errorMessage);
        }

        return Promise.reject(error);
    },
);

export default request;
