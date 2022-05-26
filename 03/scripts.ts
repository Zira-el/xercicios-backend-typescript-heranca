import { Arqueiro } from "./Arqueiro";
import { Mago } from "./Mago";

const mago = new Mago('Ronaldinho')
const arqueiro = new Arqueiro('Legolas')

console.log(mago, arqueiro)
console.log(mago.andar())
console.log(mago.andar())
console.log(arqueiro.usarFechas())
console.log(mago.parar())
console.log(mago.andar())
console.log(mago.andar())
mago.criarMagia()
console.log(arqueiro.usarFechas())
console.log(arqueiro.usarFechas())
console.log(arqueiro.usarFechas())
console.log(arqueiro.usarFechas())
console.log(arqueiro.usarFechas())
arqueiro.criarFlechas()
console.log(mago, arqueiro)
