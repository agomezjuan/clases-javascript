/**
 * ## Calculadora - Nivel I

1. Crear un archivo calculadora.js que contendrá las distintas operaciones a realizar de nuestra calculadora.
2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos.
3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la resta del primero menos el segundo.
4. Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar el resultado de su multiplicación
5. Crear una función dividir, la cual recibirá dos parámetros y retorna el resultado de la división del primero sobre el segundo.
 */
// Función spara sumar dos números
function sumar(a, b) {
    return a + b;
}
// Función spara restar dos números
function restar(a, b) {
    return a - b;
}

// Función spara multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función spara dividir dos números
function dividir(a, b) {
    return a / b;
}


// alert("Esto es un fastidioso alert!!!")
// var confirmacion = confirm("¿Quieres repetir el alert?")
// var respuestaUsuario = prompt("¿Cómo te llamas?")

// console.log(confirmacion);
// console.log(respuestaUsuario);

// if (confirmacion) {
//     alert("Vaya que te gustan los alerts!!")
// }

// var a = parseInt(prompt("Escribe un numero: ")) // string 
// var b = parseInt(prompt("Escribe otro numero: ")) // string


// document.write("La suma de tus numeros es: " + sumar(a, b))
// document.write("La resta de tus numeros es: " + restar(a, b))
// document.write("La multiplicación de tus numeros es: " + multiplicar(a, b))
// document.write("La división de tus numeros es: " + dividir(a, b))


// Titulo en el documento html
const titulo = document.getElementById("titulo")
console.log(titulo);

// Crear un nodo Parrafo con .createElement()
const mensaje = document.createElement("p")

// Insertar el texto "Mi parrafo" en el elemento <p> creado previamente
mensaje.innerHTML = "Mi parrafo"

// Insertamos el parrafo despues del titulo
titulo.insertAdjacentElement("afterend", mensaje)

// Obtener valores del input
const a = document.getElementById("a")
const b = document.getElementById("b")


// Obtenemos todos los elementos con la clase .boton
const botones = document.getElementsByClassName('boton')

// Iterar sobre los botones
for (let i = 0; i < botones.length; i++) {
    const element = botones.item(i);
    element.style.backgroundColor = "red"
    element.style.color = "white"
}


// Operaciones DOM
// Suma
function operacionSuma() {
    let resultado = sumar(parseInt(a.value), parseInt(b.value))
    const elementoSuma = document.getElementById("suma")
    elementoSuma.innerHTML = "El resultado es: " + resultado
}

// Resta
function operacionRestar() {
    let resultado = restar(a, b)
    const elementoResta = document.getElementById("resta")
    elementoResta.innerHTML = "El resultado es: " + resultado
}

// Multiplicación
function operacionMultiplicar() {
    let resultado = multiplicar(a, b)
    const elementoMultiplicar = document.getElementById("multiplicacion")
    console.log(elementoMultiplicar);
    elementoMultiplicar.innerHTML = "El resultado es: " + resultado
}

// División
function operacionDividir() {
    let resultado = dividir(a, b)
    const elementoDivision = document.getElementById("division")
    elementoDivision.innerHTML = "El resultado es: " + resultado
}