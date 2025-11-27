import DBService from '@/services/DbService';

export default class UserController {
    static async index() {
        const users = await DBService.listar('users');
        return users;
    }
    
    static async registrar(payload) {
        const documento = {
            id: crypto.randomUUID(),
            ...payload
        }

        await DBService.adicionar('users', documento);
    }   
    
    static async excluir(id) {
        return await DBService.excluir('users', id);
    }
}