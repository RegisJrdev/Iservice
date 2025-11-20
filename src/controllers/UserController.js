import DBService from '@/services/DbService';

export default class UserController {
    async index() {
        const users = await DBService.listar('users');
        return users;
    }

    static async registrar(payload) {

        const documento = {
            name: payload.nome,
            email: payload.email,
            password: payload.senha,
            role: payload.role,
        }

        await DBService.adicionar('users', documento);
    }
}   