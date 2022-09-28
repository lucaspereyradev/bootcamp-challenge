// Construir una función que sume los elementos de una lista de enteros recursivamente

const arrayNumeros = [1, 2, 3, 4, 5, 6]; // array que almacena los numeros

function sumarEnteros(array) { // funcion para sumar los numeros
    let suma = 0; // variable que almacena la suma
    for (let i in array) { // bucle para la suma del array
        suma += array[i];  
    } 
    return suma;
}

console.log(sumarEnteros(arrayNumeros));
