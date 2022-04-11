export interface ContatoDTO {
  contact: {
    descricao?: string;
    idContato?: Number;
    idPessoa?: Number;
    numero?: string;
    tipoContato: string;
  }[];
}
