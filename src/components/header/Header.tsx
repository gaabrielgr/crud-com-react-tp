import Logo from "./Logo";
import Menu from "./Menu";
import { ContainerHeader, ButtonSair, DivFixed } from "../Header.styles";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Header = () => {
  const { isLogged, deslogar } = useContext<any>(AuthContext);
  const token = localStorage.getItem("key");

  return (
    <>
      {isLogged && (
        <ContainerHeader>
          <DivFixed>
            <Logo />
            <Menu />
            <>{token && <ButtonSair onClick={deslogar}>Sair</ButtonSair>}</>
          </DivFixed>
        </ContainerHeader>
      )}
    </>
  );
};

export default Header;
