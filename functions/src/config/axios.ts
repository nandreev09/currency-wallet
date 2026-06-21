import axios from "axios";

export const exchangeApi = axios.create({
    baseURL: "https://api.exchangerate.host",
    timeout: 10000
});