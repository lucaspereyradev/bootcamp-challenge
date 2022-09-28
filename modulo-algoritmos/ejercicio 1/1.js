// Pide un número por teclado e indica si es un número primo o no. Un número primo es
// aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que
// 25 es divisible entre 5, sin embargo, 17 si es primo.

let numeroPrimo = prompt("Escribe un numero"); // numero a verificar
let esNumeroPrimo = true; // numero booleano por defecto

for (let i = 2; i < numeroPrimo; i++) {   // bucle FOR para verificar si su division es exacta
    if(numeroPrimo % i === 0){
        esNumeroPrimo = false;
    }
}

if(esNumeroPrimo){ // if para saber si es primo o no
    document.write('El numero ', numeroPrimo, ' es un numero primo'); 
}else  {
    document.write('El numero ', numeroPrimo, ' no es un numero primo');
}