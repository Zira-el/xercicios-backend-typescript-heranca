import { Aluno } from "./Aluno";
import { Professor } from "./Professor ";

const professor = new Professor({
    nome: 'Dina',
    email: 'dina@email.com',
    telefone: '1234567890',
    senha: '123456'
})

const aluno = new Aluno({
    nome: 'Zirael',
    email: 'zirael@email.com',
    telefone: '1234567890',
    senha: '123456'
})

console.log(professor.autenticar('123456'))
professor.lancarNota(aluno, 9)
professor.lancarNota(aluno, 8)
console.log(aluno.obterMedia())


