
import axios from "axios";

const request = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 8000
});

request.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

export default request;
