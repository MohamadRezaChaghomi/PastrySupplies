// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  loginReq,
  registerReq,
  logoutReq,
  fetchUser,
} from "../services/AuthContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // وقتی کامپوننت لود شد، سعی می‌کنیم کاربر لاگین‌شده رو بگیریم
  useEffect(() => {
    fetchUser()
      .then((data) => setUser(data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const login = async (mobile, password) => {
    const data = await loginReq({ mobile, password });
    setUser(data.user);
    return data;
  };

  const register = async (first_name, last_name, mobile, password) => {
    const data = await registerReq({ first_name, last_name, mobile, password });
    setUser(data.user);
    return data;
  };

  const logout = async () => {
    await logoutReq();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// هوک اختصاصی برای دسترسی ساده‌تر
export const useAuth = () => {
  return useContext(AuthContext);
};
