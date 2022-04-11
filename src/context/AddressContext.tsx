import { createContext, ReactNode, FC, useState, useEffect } from "react";
import api from "../api";
import { GetAddressDTO } from "../model/GetAddressDTO";

export const AddressContext = createContext({});
const AddressProvider: FC<ReactNode> = ({ children }) => {
  const [address, setAddress] = useState<GetAddressDTO["address"]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getListAddress = async () => {
    try {
      const { data } = await api.get("/endereco");
      setAddress(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    getListAddress();
  }, []);

  return (
    <AddressContext.Provider
      value={{ getListAddress, address, error, loading }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
