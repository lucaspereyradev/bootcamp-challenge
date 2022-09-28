// Pedir al usuario que ingrese un número repetidamente hasta que ingrese un -1 y en ese
// caso se terminará el programa.
// Al terminar, mostrará lo siguiente:
// a. – mayor número introducido
// b. – menor número introducido
// c. – suma de todos los números
// d. – suma de los números

var nums = []; // array para almacenar los numeros

while(true) { // bucle para almacenar numeros
    let userNum = prompt("Ingresa un numero");
    nums.push(userNum);
    
    if (userNum == "-1") {
        nums.pop();
        break; // cuando el usuario ingrese -1 se rompera el ciclo
    }
}

let maxNum = Math.max.apply(null, nums); // calcular numero mas alto
let minNum = Math.min.apply(null, nums); // calcular numero mas bajo

function sumarEnteros(nums) { // funcion para sumar los numeros
    let suma = 0; // variable que almacena la suma de los numeros
    for (let i in nums) { // bucle para la suma del array
        if (Array.isArray(nums[i])) suma += nums[i]; // si es un array lo va a sumar
        else suma += nums[i];
    }
    return suma;
}

document.write("El numero mas alto es: ", maxNum, "<br>",
               "El numero mas bajo es: ", minNum, "<br>", 
               "La suma total es: ", sumarEnteros(nums), "<br>",
               "La cantidad de numeros escritos es de: ", nums.length);