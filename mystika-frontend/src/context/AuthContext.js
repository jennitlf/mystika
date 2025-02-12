import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const getUserFromToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000; 
    if (decoded.exp && decoded.exp > now) {
      return {
        name: decoded.name,
        email: decoded.email,
      };
    }
    return null;
  } catch (error) {
    console.error("Token inválido", error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = getUserFromToken(token);
      if (userData) {
        setUser(userData);
      } else {
        localStorage.removeItem('token'); 
      }
    }

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    const userData = getUserFromToken(token);
    if (userData) {
      setUser(userData);
      localStorage.setItem('token', token);
      console.log("estou aqui", localStorage)
    } else {
      console.error("Token inválido fornecido no login.");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
