import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://api.exchangerate.host",
    headers: {
        apikey: import.meta.env.VITE_EXCHANGE_API_KEY
    }
});