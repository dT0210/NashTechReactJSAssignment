import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        // const token = localStorage.getItem("token");
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res?.data;
        // return {data: res?.data, status: res.status};
    },
    async (error) => {
        if (error.response.status === 401) {
            window.location.href = "/login";
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
    }
);

export const httpClient = instance;