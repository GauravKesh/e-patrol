// utils/api.ts or wherever you store helpers
import axios from 'axios';
import { getToken } from './tokenHelper';
import config from '@/app/context/Config';

const api = axios.create({
    baseURL: `${config.baseUrl}/api/v1`,
});

api.interceptors.request.use(
    (reqConfig) => {
        if (typeof window !== 'undefined') {
            const token = getToken();
            if (token) {
                reqConfig.headers.Authorization = `Bearer ${token}`;
            }
        }
        return reqConfig;
    },
    (error) => Promise.reject(error)
);

export default api;
