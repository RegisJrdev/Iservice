import LocalBase from 'localbase';

class DbService {
    constructor() {
        this.db = new LocalBase('db');
    }
    
    async listar(colecao) {
        return await this.db.collection(colecao).get();
    }

    async adicionar(colecao, documento) {
        return await this.db.collection(colecao).add(documento);
    }

    async atualizar(colecao, id, documento) {
        return await this.db.collection(colecao).update(id, documento);
    }

    async excluir(colecao, id) {
        //primeiro ele busca os docs
        //depois procura o que tem id igual o da função
        //dai joga ele para delete
        const docs = await this.db.collection(colecao).get();
        const docToDelete = docs.find(doc => doc.id === id);
        return await this.db.collection(colecao).doc(docToDelete).delete();
    }

}

export default new DbService('db');