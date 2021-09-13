import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "http://41.89.94.80/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default AxiosInstance;