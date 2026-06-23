import axios from "axios";

export const exchangeApi = axios.create({
    baseURL: "https://api.frankfurter.app",
    timeout: 10000,
});