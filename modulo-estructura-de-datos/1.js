// Implementar una función que recibe una lista de enteros L y un número entero n de forma
// que modifique la lista mediante el borrado de todos los elementos de la lista que tengan este
// valor

function borrarElemento(c) { // funcion para borrar elementos de un array
    const a = c.filter((item) => item != '4');
    return a;
}

const l = ['1', '4', '4', '4', '5', '44']; // array que almacena los numeros

console.log(borrarElemento(l))