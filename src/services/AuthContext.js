// src/services/authService.js
import axios from "axios";

axios.defaults.withCredentials = true; // برای ارسال کوکی‌های Sanctum

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const getCsrf = () => {
  return axios.get(`${API_BASE}/sanctum/csrf-cookie`);
};

export const loginReq = async ({ mobile, password }) => {
  await getCsrf();
  const res = await axios.post(`${API_BASE}/api/v1/login`, { mobile, password });
  return res.data;
};

export const registerReq = async ({ first_name, last_name, mobile, password }) => {
  await getCsrf();
  const res = await axios.post(`${API_BASE}/api/v1/register`, {
    first_name,
    last_name,
    mobile,
    password,
  });
  return res.data;
};

export const logoutReq = async () => {
  return axios.post(`${API_BASE}/api/v1/logout`);
};

export const fetchUser = async () => {
  const res = await axios.get(`${API_BASE}/api/user`);
  return res.data;
};
