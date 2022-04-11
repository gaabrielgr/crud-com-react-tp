import styled from "styled-components";

export const ContainerHome = styled.section`
  display: flex;
  width: calc(100vw - 340px);
  background-color: #e5e5e5;

  align-items: center;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  display: flex;
  column-gap: 50px;
`;

export const Card = styled.div`
  width: 400px;
  height: 150px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #000;
`;

export const CardTitle = styled.h1`
  color: #333;
  font-size: 40px;
`;

export const ContainerCadastrados = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 150px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #000;
  :hover {
    background-color: #f7f7f7;
  }
`;
export const TotalCadastrados = styled.p`
  font-size: 30px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardIcon = styled.div`
  font-size: 45px;
`;
