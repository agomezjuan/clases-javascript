var cadena = "Hola Mundo";
const cadena3 = "nsanhsafhb";

let isAdult = true; // false

let edad = 18;

let edad2 = 18.5;

let lista = [1, 2, 3, 4, 5];

console.log("Primer elemento: ", lista[0]);
console.log("Cuarto elemento: ", lista[3]);

console.log(lista.length)


let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 18,
    isAdult: false,
}

console.log("Edad de la persona: ", persona["edad"]);

console.log(cadena3);

let titulo_1

if (persona.isAdult) {
    titulo_1 = "Es verdadero";
} else {
    titulo_1 = "Es falso";
}

// const titulo = document.getElementById("titulo");
// titulo.innerText = titulo_1;

// titulo.style.color = "red";

// console.log(titulo);

// Decalración de función
// function cambiarColor() {
//     titulo.style.color = "blue";
// }


// Invocación de función
// cambiarColor();