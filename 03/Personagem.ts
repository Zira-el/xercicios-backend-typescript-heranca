/* type Char = {
    nome: string
    velocidade: number
}
 */
export class Personagem {
    public nome: string
    public velocidade: number

    constructor(nome: string) {
        this.nome = nome
        this.velocidade = 0
    }

    andar(): string {
        return `Velocidade = ${this.velocidade += 1}`
    }

    parar(): string {
        return `Velocidade = ${this.velocidade = 0}`
    }
}