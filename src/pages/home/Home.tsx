import { useContext, useEffect } from "react";
import { IoPerson } from "react-icons/io5";
import { BsFillSignpostSplitFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AddressContext } from "../../context/AddressContext";
import { UserContext } from "../../context/UserContext";
import {
  ContainerHome,
  CardTitle,
  ContainerCard,
  TotalCadastrados,
  ContainerCadastrados,
  CardInfo,
  CardIcon,
} from "./Home.styles";
import api from "../../api";

const Home = () => {
  const { address, getListAddress } = useContext<any>(AddressContext);
  const { getUsers, person } = useContext<any>(UserContext);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      api.defaults.headers.common["authorization"] = token;
    }
    getUsers();
    getListAddress();
  }, []);

  return (
    <ContainerHome>
      <ContainerCard>
        <Link to={"/users"}>
          <ContainerCadastrados>
            <CardIcon>
              <IoPerson />
            </CardIcon>
            <CardInfo>
              <CardTitle>Usuários</CardTitle>
              <TotalCadastrados>{`cadastrados: ${person.length}`}</TotalCadastrados>
            </CardInfo>
          </ContainerCadastrados>
        </Link>
        <Link to={"/address"}>
          <ContainerCadastrados>
            <CardIcon>
              <BsFillSignpostSplitFill />
            </CardIcon>
            <CardInfo>
              <CardTitle>Endereços</CardTitle>
              <TotalCadastrados>{`cadastrados: ${address.length}`}</TotalCadastrados>
            </CardInfo>
          </ContainerCadastrados>
        </Link>
      </ContainerCard>
    </ContainerHome>
  );
};

export default Home;
