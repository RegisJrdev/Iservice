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

  async aceitarServico(id) {
    return await DbService.atualizar('servicos', id, { aceito: true });
  }
};

export default new ServicoController();
