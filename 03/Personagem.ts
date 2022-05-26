/* type Char = {
    nome: string
    velocidade: number
}
 */
export class Personagem {
    public nome: string
    public velocidade: number = 0

    constructor(nome: string) {
        this.nome = nome
    }

    andar(): string {
        return `Velocidade = ${this.velocidade += 1}`
    }

    parar(): string {
        return `Velocidade = ${this.velocidade = 0}`
    }
}