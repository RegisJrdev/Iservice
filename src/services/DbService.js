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
      if (!colecao) throw new Error('colecao é obrigatória')
      if (!documento || typeof documento !== 'object') {
        throw new Error('documento inválido (esperado object)')
      }

      // remove proxy/ref só para garantir (se tiver sido passado)
      // não usa toRaw aqui para não adicionar dependência do Vue;
      // convertemos via JSON para garantir plain object (bom para debug)
      const plain = JSON.parse(JSON.stringify(documento))

      // opcional: gere id se não existir
      if (!plain.id) {
        plain.id = crypto?.randomUUID ? crypto.randomUUID() : Date.now().toString()
      }

      const res = await this.db.collection(colecao).add(plain)
      // LocalBase retorna o documento adicionado ou id (depende da versão). Logue pra saber.
      console.log(`[DbService.adicionar] Coleção=${colecao} adicionado:`, res)
      return res
    } catch (err) {
      console.error(`[DbService.adicionar] coleção=${colecao} documento=`, documento, '\nErro:', err)
      // lançar erro claro para quem chamou
      throw new Error(`Could not add Document to ${colecao} collection. ${err?.message || err}`)
    }
  }

  async atualizar(colecao, id, documento) {
    try {
      if (!colecao || !id) throw new Error('colecao e id são obrigatórios')
      const plain = JSON.parse(JSON.stringify(documento))
      return await this.db.collection(colecao).doc({ id }).update(plain)
    } catch (err) {
      console.error(`[DbService.atualizar] coleção=${colecao} id=${id}`, err)
      throw err
    }
  }

  async excluir(colecao, id) {
    try {
      if (!colecao || !id) throw new Error('colecao e id são obrigatórios')
      // LocalBase aceita doc({ id }) para selecionar
      return await this.db.collection(colecao).doc({ id }).delete()
    } catch (err) {
      console.error(`[DbService.excluir] coleção=${colecao} id=${id}`, err)
      throw err
    }
  }
}

export default new DbService()
