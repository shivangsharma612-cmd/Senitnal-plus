import axios from "axios";

const api = axios.create({
  baseURL: "https://sentinal.onrender.com"
});

export default api;