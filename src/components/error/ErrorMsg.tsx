import logoError from "./error.gif";
import { ContainerError } from "./Error.styles";
const ErrorMsg = () => {
  return (
    <ContainerError>
      <img src={logoError} alt="" />
    </ContainerError>
  );
};

export default ErrorMsg;
