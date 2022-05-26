import { Mamifero } from "./Mamifero";

export class Cachorro extends Mamifero {
    
    constructor (
        nome: string,
        peso: number,
        altura: number,
        comprimento: number
    ) {
        super(nome, peso, altura, comprimento)
    }

    latir(){
        return `Cachorro latindo`
    }

    andar() {
        return `Animal Andando`
    }
}