export type User = {
    nome: string
    email: string
    telefone: string
    senha: string
}

export class Usuario {
    public nome: string
    private email: string
    private telefone: string
    private senha: string

    constructor(user: User){
        this.nome = user.nome
        this.email = user.email
        this.telefone = user.telefone
        this.senha = user.senha
    }

    autenticar(senha: string): string {
        return this.senha === senha ? 'Usuario logado' : 'Senha inválida'
    }
}