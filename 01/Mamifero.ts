export class Mamifero {
    public nome: string
    public peso: number
    public altura: number
    public comprimento: number

    constructor(
        nome: string,
        peso: number,
        altura: number,
        comprimento: number
    ) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
        this.comprimento = comprimento
    }

    comer(){
        return `Animal comendo`
    }
}