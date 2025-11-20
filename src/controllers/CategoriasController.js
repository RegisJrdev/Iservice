import DBService from '@/services/DbService'

export default {
  colecao: 'categories',

  async listar() {
    const items = await DBService.listar(this.colecao); // [{key, data}]
    return items.map(i => ({ id: i.key, ...i.data }));
  },

}