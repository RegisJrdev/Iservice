import LocalBase from 'localbase'

class DbService {
  constructor() {
    this.db = new LocalBase('db')
  }

  async listar(colecao) {
    try {
      const docs = await this.db.collection(colecao).get()
      return Array.isArray(docs) ? docs : []
    } catch (err) {
      console.error(`[DbService.listar] coleção=${colecao}`, err)
      throw err
    }
  }

  async adicionar(colecao, documento) {
    try {
      const plain = JSON.parse(JSON.stringify(documento))
      const res = await this.db.collection(colecao).add(plain)
      return res
    } catch (err) {
      console.error(err)
    }
  }

  async atualizar(colecao, id, documento) {
    try {
      const plain = JSON.parse(JSON.stringify(documento))
      return await this.db.collection(colecao).doc({ id }).update(plain)
    } catch (err) {
      console.log(err);
    }
  }

  async excluir(colecao, id) {
    try {
      return await this.db.collection(colecao).doc({ id }).delete()
    } catch (err) {
      console.log(err);
    }
  }
}

export default new DbService()
