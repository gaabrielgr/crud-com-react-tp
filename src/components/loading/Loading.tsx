import React from "react";
import logoLoading from "./loading.gif";
import { ContainerLoading } from "./Loading.styles";
const Loading = () => {
  return (
    <ContainerLoading>
      <img src={logoLoading} alt="" />
    </ContainerLoading>
  );
};

export default Loading;
