// Arrays

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const frutas = ["manzana", "pera", "uva", "sandia", "melon", 45, 287];

// Obteniendo el elemento lista del DOM
const lista = document.getElementById("lista");

// Creando un elemento ul
const ul = document.createElement("ul");

// Recorriendo el array frutas
for (let i = 0; i < frutas.length; i++) {

    // Creando un elemento li
    const li = document.createElement("li");

    // Agregando el contenido del array frutas al elemento li
    li.innerHTML = frutas[i];

    // Agregando el elemento li al elemento ul
    ul.appendChild(li);
}

// Agregando el elemento ul al elemento lista
lista.appendChild(ul);


// Creando un bloque de HTML
const bloqueImage = "<img src='https://picsum.photos/200/300' alt=''>";
const bloqueTexto = `<div>
                        <h1>Titulo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    `;

// Agregando el bloque de imagen HTML al elemento lista
lista.innerHTML = bloqueImage;

// Concatenando el bloque de textos HTML al elemento lista
lista.innerHTML += bloqueTexto;

// Agregando estilos al elemento lista
lista.style.backgroundColor = "gray";

//Metodos de los arrays
// 1. push - Agrega un elemento al final del array
arr.push(11);
arr.push("perro");

// 2. pop - Elimina el ultimo elemento del array
arr.pop();
arr.pop();
arr.pop();

// 3. shift - Elimina el primer elemento del array
arr.shift();

// 4. unshift - Agrega un elemento al inicio del array
arr.unshift(1);
arr.unshift("gato");

// 5. splice - Elimina o agrega elementos en cualquier posicion del array
arr.splice(2, 0, "perro");

// 6. slice - Extrae elementos de un array
const arr2 = arr.slice(2, 5);
console.log(arr2);

// 7. indexOf - Busca un elemento en el array y devuelve su posicion
const index = arr.indexOf("pez");
console.log(index);

// 8. includes - Busca un elemento en el array y devuelve true o false
const existe = arr.includes("gato");
console.log(existe);

// Muestro el array antes de aplicar el metodo reverse
console.log("antes", arr);
// 9. reverse - Invierte el orden de los elementos del array
arr.reverse();
// Muestro el array despues de aplicar el metodo reverse
console.log("despues", arr);


// Verificando si un elemento existe en el array
if (arr.includes("gato")) {
    console.log("El gato existe");
}

// Single Page Application
// forEach --
// map --
// filter
// find
// findIndex
// reduce
// sort