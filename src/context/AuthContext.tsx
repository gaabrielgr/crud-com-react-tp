import { FC, createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";

import { loginDTO } from "../model/LoginDTO";
import api from "../api";
export const AuthContext = createContext({});

const AuthProvider: FC<ReactNode> = ({ children }) => {
  const navigatePage = useNavigate();
  const [key, setKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("key");
    if (token) {
      api.defaults.headers.common["authorization"] = token;
      setIsLogged(true);
    } else {
      navigatePage("/login");
    }
    setLoading(false);
  }, []);

  const handleLogin = async (user: loginDTO) => {
    try {
      const { data } = await api.post("/auth", user);
      setKey(data);
      localStorage.setItem("key", data);
      api.defaults.headers.common["authorization"] = data;
      setIsLogged(true);
      navigatePage("/");
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure("Usuário e/ou senha inválidos!", {
        timeout: 2000,
      });
    }
  };

  const deslogar = () => {
    localStorage.removeItem("key");
    setIsLogged(false);
    navigatePage("/login");
  };
  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <AuthContext.Provider
      value={{ handleLogin, deslogar, key, setLoading, isLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
