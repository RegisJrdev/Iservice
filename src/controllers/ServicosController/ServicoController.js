import DbService from "@/services/DbService";

class ServicoController {
  constructor() {
    this.colecao = "servicos";
  }

  async listarServicos() {
    return await DbService.listar(this.colecao);
  }

  async adicionarServico(servico) {
    return await DbService.adicionar(this.colecao, servico);
  }

  async excluirServico(id) {
    return await DbService.excluir(this.colecao, id);
  }
};

export default new ServicoController();
