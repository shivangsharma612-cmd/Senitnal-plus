import axios from "axios";

const api = axios.create({
  baseURL: "https://sentinal.onrender.com", // 🔥 YOUR LIVE BACKEND
  withCredentials: true,
});

export default api;