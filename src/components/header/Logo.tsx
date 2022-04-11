import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImg from "../../images/logoEcos.png";
import { ContainerLogo } from "../Header.styles";

const Logo = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem(""));
  useEffect(() => {
    setToken(localStorage.getItem("key"));
  }, []);
  return (
    <ContainerLogo>
      {token ? (
        <Link to="/">
          <img src={logoImg}></img>
        </Link>
      ) : (
        <Link to="/login">Logo</Link>
      )}
    </ContainerLogo>
  );
};

export default Logo;
