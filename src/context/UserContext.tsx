import { FC, createContext, useState, ReactNode, useEffect } from "react";
import api from "../api";
import { PessoaDTO } from "../model/PessoaDTO";
export const UserContext = createContext({});

const UserProvider: FC<ReactNode> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [person, setPerson] = useState<PessoaDTO["person"]>([]);

  const getUsers = async () => {
    try {
      const { data } = await api.get("/pessoa");
      setPerson(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ getUsers, person, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
