import { Mamifero } from "./Mamifero";

export class Baleia extends Mamifero {
    
    constructor (
        nome: string,
        peso: number,
        altura: number,
        comprimento: number
    ) {
        super(nome, peso, altura, comprimento)
    }

    nadar(){
        return `Baleia nadando`
    }
}

