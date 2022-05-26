import { Personagem } from "./Personagem";

export class Mago extends Personagem {
    public magia: number = 5

    constructor(nome: string) {
        super(nome)
    }

    usarMagia(): string {
        if(!this.magia) return 'Magia indisponível'
        this.magia -= 1
        return 'Magia usada' 
    }

    criarMagia() {
        this.magia += 1
    }
}