import { User, Usuario } from "./Usuario";

export class Aluno extends Usuario {
    public notas: number[]
    
    constructor(user: User) {
        super(user)
        this.notas = []
    }

    obterMedia():number {
        const soma = this.notas.reduce((soma, atual) => {
            return soma + atual
        })
        const media = soma / this.notas.length
        return media
    }
}