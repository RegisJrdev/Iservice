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
        return await this.db.collection(colecao).delete(id);
    }

}

export default new DbService('db');