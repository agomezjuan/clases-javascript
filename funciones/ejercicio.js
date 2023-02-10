// Funciones simples
/*
1. Crear una función que convierta pulgadas en centímetros. Es decir, recibe por parámetro pulgadas y retorna su equivalente en centímetros.
*/
function centimetros(pulgadas) {
   var resultado = pulgadas * 2.54
   return resultado + " cm";
}

console.log(centimetros(3));

/*
2. Crear una función que recibe un string y lo convierte en una URL. Ejemplo: “pepito” es devuelto como “http://www.pepito.com”.
*/
function url(nombre) {
   return "http://www." + nombre + ".com";
}

/*
3. Crear una función que recibe un string y devuelve la misma frase, pero con admiración.
*/
function admiracion(frase) {
   return frase + "!";
}

/*
4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
/*


/*
5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. Considera que tu mes de trabajo tiene 40 horas.
/*


/*
6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona.Luego, ejecutar la función probando diferentes valores.
*/



/**
 * 1. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. Pista: investigá qué hace el método de strings: toUpperCase()
 */

function convertMayus(cadena) {
   return cadena.toUpperCase();
}
