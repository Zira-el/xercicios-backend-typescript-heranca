import { Mamifero } from "./Mamifero";

export class Gato extends Mamifero {
    
    constructor (
        nome: string,
        peso: number,
        altura: number,
        comprimento: number
    ) {
        super(nome, peso, altura, comprimento)
    }

    miar(){
        return `Gato miando`
    }

    andar() {
        return `Animal Andando`
    }
}