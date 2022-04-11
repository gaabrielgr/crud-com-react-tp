import { ContatoDTO } from "./ContatoDTO";
export interface PessoaDTO {
  person: {
    contatosList?: ContatoDTO;
    cpf: string;
    dataNascimento: string;
    email: string;
    idPessoa?: Number;
    nome: string;
  }[];
}
