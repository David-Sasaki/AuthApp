import React, { createContext, useState, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  token: string | null;
  login: (data: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  const login = (data: string | null) => {
    setToken(data);
    // Save token, handle authentication status, etc.
    navigate("/");
  };

  const logout = () => {
    setToken(null);
    // Clear token, update authentication status, etc.
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
