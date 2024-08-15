let jugadores = ["manuel", "juan", "pedro", "marta", "joaquina"]

let puntajes = []
for (let indice = 0; indice < 5; indice=indice+1) {
    let puntaje = (prompt("Ingrese el puntaje para el jugador " + jugadores[indice]))
    puntajes.push(puntaje)
}

let puntajemayor = puntajes[0]
let jugadorpuntajemayor = jugadores[0]

for (let indice = 1; indice < puntajes.length; indice=indice+1) {
    if (puntajes[indice] > puntajemayor) {
        puntajemayor = puntajes[indice]
        jugadorpuntajemayor = jugadores[indice]
    }
}
console.log("El puntaje más alto es " + puntajemayor + " y  lo tiene " + jugadorpuntajemayor)

let puntajemenor = puntajes[0]

for (let index = 1; index < puntajes.length; index=index+1) {
    if (puntajes[index] < puntajemenor) {
        puntajemenor = puntajes[index]
    }
}
console.log("El puntaje minimo es " + puntajemenor)

let jugadornuevo = prompt("Ingrese el nombre del nuevo jugador")
let puntajenuevo = (prompt("Ingrese el puntaje para " + jugadornuevo))
jugadores.push(jugadornuevo)
puntajes.push(puntajenuevo)

console.log("La cantidad de puntajes guardados es " + puntajes.length)

let puntajenuevofinal = (prompt("Ingrese el nuevo puntaje para " + jugadores[jugadores.length - 2]));
let puntajenuevoanteultimo = (prompt("Ingrese el nuevo puntaje para " + jugadores[jugadores.length - 1]))
puntajes[puntajes.length - 2] = puntajenuevofinal
puntajes[puntajes.length - 1] = puntajenuevoanteultimo

console.log("Jugadores: ", jugadores);
console.log("Puntajes: ", puntajes);

