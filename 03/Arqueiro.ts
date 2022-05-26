import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem {
    public flechas: number = 5

    constructor(nome: string) {
        super(nome)
    }

    usarFechas(): string {
        if(!this.flechas) return 'flecha indisponível'
        this.flechas -= 1
        return 'flechas usadas'
    }

    criarFlechas() {
        this.flechas += 1
    }
}