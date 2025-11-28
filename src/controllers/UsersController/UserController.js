import DBService from '@/services/DbService';

class UserController {
    async index() {
        const users = await DBService.listar('users');
        return users;
    }
    
    async registrar(payload) {
        const documento = {
            id: crypto.randomUUID(),
            ...payload
        }

        await DBService.adicionar('users', documento);
    }   
    
    async excluir(id) {
        return await DBService.excluir('users', id);
    }
}

export default new UserController();