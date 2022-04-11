import styled from "styled-components";
import InputMask from "react-input-mask";

export const ContainerForm = styled.form`
  height: 600px;
  background-color: #e5e5e5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3%;
  color: #9fa2b4;
  border-radius: 8px;
`;

export const MaskInput = styled(InputMask)`
  width: 490px;
  height: 42px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1.5px solid #cdcdce;
  color: #777777;
  font-size: 18px;
  outline: none;
  &::placeholder {
    color: #9fa2b4;
  }
  &:focus {
    border: 1px solid #9fa2b4;
  }
`;

export const DivForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100px;
`;

export const Input = styled.input`
  width: 490px;
  height: 42px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1.5px solid #cdcdce;
  color: #777777;
  font-size: 18px;
  outline: none;
  &::placeholder {
    color: #9fa2b4;
  }
  &:focus {
    border: 1px solid #9fa2b4;
  }
`;
export const Label = styled.label`
  color: #777777;
  font-size: 18px;
`;

export const Select = styled.select`
  width: 490px;
  height: 42px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #f0f1f7;
  color: #777777;
  font-size: 18px;
  outline: none;
  &::placeholder {
    color: #9fa2b4;
  }
  &:focus {
    border: 1px solid #9fa2b4;
  }
`;

export const Botao = styled.button`
  height: 42px;
  width: 490px;
  justify-self: center;
  background-color: #3751ff;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  color: #fff;
  grid-column: 1 / 3;
  cursor: pointer;
  :hover {
    background-color: #273bbe;
  }
`;

export const BotaoDeletar = styled.button`
  height: 42px;
  width: 490px;
  justify-self: center;
  background-color: #a02140;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 12px rgba(170, 35, 35, 0.24);
  color: #fff;
  grid-column: 1 / 3;
  cursor: pointer;
  :hover {
    background-color: #7a1931;
  }
`;

export const PesquisarCep = styled.a`
  cursor: pointer;
  font-size: 24px;
  color: #9fa2b4;
  top: 33px;
  left: 600px;
  position: absolute;
`;

export const Error = styled.small`
  color: red;
`;

/* tabela */

export const BackGroundTabela = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Tabela = styled.table`
  width: 98%;
  text-align: center;
  border-spacing: 0px;
  background-color: #fff !important;
  border-radius: 8px;

  border: 1.5px solid #dfe0eb;
`;
export const ThComplemento = styled.th`
  width: 200px;
`;
export const TdComplemento = styled.td`
  width: 200px;
  max-width: 20ch;
  border-bottom: 1.5px solid #dfe0eb;
  color: #777777;
  font-size: 18px;
  height: 90px;
  width: 300px;
`;
export const TrTabela = styled.tr`
  &:nth-child(even) {
    background-color: #eeeeee;
  }
`;

export const TdTabela = styled.td`
  border-bottom: 1.5px solid #dfe0eb;
  color: #777777;
  font-size: 18px;
  height: 90px;
  width: 300px;
  max-width: 20ch;
`;

export const TheadTabela = styled.thead`
  height: 90px;
  background-color: #eeeeee;
  font-size: 24px;
  color: #a8a8a8;
`;

export const TitleUsers = styled.h1`
  align-self: start;
  color: #808080;
  margin: 36px 0px 36px 40px;
`;

export const ContainerAddress = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 100%;
  background-color: #e5e5e5;
`;

export const AtualizarDeletar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  button {
    height: 30px;
    width: 120px;
  }
`;
export const DivErro = styled.div`
  color: red;
`;
