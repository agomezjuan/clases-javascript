## Funciones simples

1. Crear una función que convierta pulgadas en centímetros. Es decir, recibe por parámetro pulgadas y retorna su equivalente en centímetros.
2. Crear una función que recibe un string y lo convierte en una URL. Ejemplo: “pepito” es devuelto como “http://www.pepito.com”.
3. Crear una función que recibe un string y devuelve la misma frase, pero con admiración.
4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. Considera que tu mes de trabajo tiene 40 horas.
6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.

## Extra desafío

1. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. Pista: investigá qué hace el método de strings: toUpperCase()
2. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. Pista: te servirá revisar qué hace la palabra reservada typeof.
3. Crear una función a la que le pasamos el radio de un círculo y nos devuelve la circunferencia. Pista: investigá si el objeto Math tiene entre sus propiedades el número pi.

## Calculadora - Nivel I

1. Crear un archivo calculadora.js que contendrá las distintas operaciones a realizar de nuestra calculadora.
2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos.
3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la resta del primero menos el segundo.
4. Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar el resultado de su multiplicación
5. Crear una función dividir, la cual recibirá dos parámetros y retorna el resultado de la división del primero sobre el segundo.

## Calculadora - Nivel II

Superado el Nivel I, agregamos un poco más de dificultad, probaremos nuestras
funciones.

1. En el archivo calculadora.js —debajo de nuestras 4 funciones hechas con
   anterioridad— creá un console.log en el cual vas a poner un string para indicar
   que debajo de él comenzarás a probar las funciones. Por ejemplo:
   console.log(“-------------- Testeo de Operaciones / Calculadora --------------”)
2. Ejecutar la función que permite sumar y la función que permite restar pasando
   como argumentos dos números cualesquiera. Mostrar en consola los
   resultados.
3. Ejecutar la función que permite multiplicar pasando como argumentos dos
   números cualesquiera. Mostrar en consola el resultado.
4. Ejecutar la función que permite dividir pasando como argumentos dos
   números cualesquiera. Mostrar en consola el resultado.
5. Ejecutar la función que permite dividir pasando ahora, como uno de los dos
   argumentos, el número cero. Mostrar en consola el resultado.

## Calculadora - Nivel III - Funciones extras

Si llegamos hasta aquí, podemos quedarnos tranquilos con lo realizado. A
continuación desarrollaremos funciones extras a nuestra calculadora, en las cuales
utilizaremos las funciones ya creadas. Podemos realizar la prueba de estas luego de
desarrollar cada una.

1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número
   como parámetro y deberá retornar ese número elevado al cuadrado.
   Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
   calcular el cuadrado del parámetro ingresado a potencia()

2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
   de 3 números, que serán ingresados por parámetro.
   Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
   previamente creadas de nuestra calculadora.

3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
   total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
   Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
   Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
   creadas de nuestra calculadora.

4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
   retornar el porcentaje del primero con respecto al segundo.
   Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
5.
