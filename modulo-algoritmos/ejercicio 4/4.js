// Generar un número aleatorio comprendido entre 0 y 1000. Pedir, a continuación, al
// usuario adivinar el número escogido por el ordenador. Para ello, debe introducir un
// número comprendido entre 0 y 1000. Se compara el número introducido con el
// calculado por el ordenador y se muestra en la consola "es mayor" o "es menor" en
// función del caso. Se repite la operación hasta que el usuario encuentra el número.

function getNumAleatorio(min, max) { // Funcion para calcular numero aleatorio
    return Math.floor(Math.random() * (max - min));
}

let num = getNumAleatorio(0, 1000); // variable que almacena el numero aleatorio entre 0 y 1000

while (true) { // while para comenzar el juego
    userNum = prompt("Ingresa tu numero");
    if (userNum == num) {
        alert("Ganaste!");
        break;
    } else if (userNum > num) {
        alert("El numero a adivinar es menor");
    } else if (userNum < num) {
        alert("El numero a adivinar es mayor");
    }
}