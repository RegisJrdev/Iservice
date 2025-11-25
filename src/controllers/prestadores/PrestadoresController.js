import DbService from "@/services/DbService";

export default {  
  colecao: "users",
  async listarPrestadores() {
    const items = await DbService.listar(this.colecao); 

    const prestadores = items
      .filter(i => i.role === "provider");
        
    return prestadores;
  },
};
