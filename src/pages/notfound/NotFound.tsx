import logoNot from "../../components/error/notfound.gif";
import { ContainerError } from "./NotFound.styles";
const NotFound = () => {
  return (
    <ContainerError>
      <img src={logoNot} alt="" />
    </ContainerError>
  );
};

export default NotFound;
