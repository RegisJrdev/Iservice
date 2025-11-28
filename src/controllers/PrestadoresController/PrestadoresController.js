// PrestadoresController.js
import DbService from "@/services/DbService";

class PrestadoresController {
  constructor() {
    this.colecao = "users";
  }

  async listarPrestadores() {
    const items = await DbService.listar(this.colecao);
    return items.filter(i => i.role === "provider");
  }

}

export default new PrestadoresController();
