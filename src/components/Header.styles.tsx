import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: #363740;
  display: flex;
  flex-direction: column;
  min-width: 340px;
  min-height: 100vh;
  border-right: 1px solid #dfe0eb;
`;

export const LiMenu = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 30px;
  height: 56px;
  position: relative;
  color: #a4a6b3;
  &:hover {
    background-color: rgb(159, 162, 180, 0.08);
  }
  :hover:before {
    content: "";
    left: 0px;
    position: absolute;
    height: 100%;
    background-color: #dde2ff;
    width: 3px;
  }
`;

export const ContainerLogo = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const ButtonSair = styled.button`
  background-color: rgb(159, 162, 180, 0.08);
  font-size: 20px;
  color: #fff;
  border-radius: 8px;
  border: none;
  width: 90%;
  height: 56px;
  margin-top: 20%;
  cursor: pointer;
  align-self: center;
  border: 1px solid rgb(159, 162, 180, 0);
  :hover {
    border: 1px solid rgb(159, 162, 180);
  }
`;

export const DivFixed = styled.div`
  border-right: 1px solid #dfe0eb;

  background-color: #363740;
  display: flex;
  flex-direction: column;
  min-width: 340px;
  position: fixed;
`;
