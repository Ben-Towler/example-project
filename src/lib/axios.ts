import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.blockchain.com/v3/exchange"
});
