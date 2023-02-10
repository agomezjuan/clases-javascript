let nombre = 'Juan';
let apellido = 'Perez';
let nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

let fila = 'M'
let columna = 7

let posicion = fila + columna;

console.log(posicion);
// Funcion declarada
function sumar(a, b) {
    return a + b;
}
let numeroRandom = 10;
// Funcion expresada
let restar = function (a, b) {
    let resultado = a - b;
    console.log(numeroRandom);
    let mensaje = "No se puede restar un número negativo";
    if (resultado < 0) {
        console.log(mensaje)
        return 0;
    }

    return resultado;
}

let r = restar(3, 2)
// console.log(resultado);