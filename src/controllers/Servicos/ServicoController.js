import DbService from "@/services/DbService";

export default {
  colecao: "services",

  async listarServicos() {
    return await DbService.listar(this.colecao);
  },

  async adicionarServico(servico) {
    return await DbService.adicionar(this.colecao, servico);
  }
};
