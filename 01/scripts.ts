import { Cachorro } from "./Cachorro";
import { Baleia } from "./Baleia";
import { Gato } from "./Gato";

const cachorro = new Cachorro(
    'Tobi', 14, 40, 100
)

const gato = new Gato(
    'Barney', 15, 4, 40 
)

const baleia = new Baleia(
    'Willy', 4000, 700, 1000 
)

console.log(cachorro, gato, baleia)
console.log(gato.miar())
console.log(baleia.nadar())
console.log(cachorro.comer())