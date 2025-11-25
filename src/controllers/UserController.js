import DBService from '@/services/DbService';

export default class UserController {
    static async index() {
        const users = await DBService.listar('users');
        return users;
    }

    static async registrar(payload) {

        const documento = {
            name: payload.nome,
            email: payload.email,
            password: payload.senha,
            role: payload.role,
            categorie: payload.categorie
        }

        await DBService.adicionar('users', documento);
    }
}   