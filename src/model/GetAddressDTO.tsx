export interface GetAddressDTO {
  address: {
    cep: "string";
    cidade: "string";
    complemento: "string";
    estado: "string";
    idEndereco: 0;
    logradouro: "string";
    numero: 0;
    pais: "string";
    tipo: "COMERCIAL";
  }[];
}
