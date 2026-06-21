import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const exchangeApi = axios.create({
  baseURL: "https://api.exchangerate.host",
  timeout: 10000,
});



export const API_KEY = process.env.EXCHANGE_API_KEY;