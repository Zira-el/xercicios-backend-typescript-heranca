import { Aluno } from "./Aluno";
import { User, Usuario } from "./Usuario";

export class Professor extends Usuario {
    constructor(user: User) {
        super(user)
    }

    lancarNota(aluno: Aluno, nota: number) {
        aluno.notas.push(nota)
    }

}