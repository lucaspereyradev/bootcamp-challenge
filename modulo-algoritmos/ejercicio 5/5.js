// Pedir al usuario que ingrese un número repetidamente hasta que ingrese un -1 y en ese
// caso se terminará el programa.
// Al terminar, mostrará lo siguiente:
// a. – mayor número introducido
// b. – menor número introducido
// c. – suma de todos los números
// d. – suma de los números

var nums = [];
let suma = 0;

while(true) {
    let userNum = prompt("Ingresa un numero");
    nums.push(userNum);
    
    if (userNum == "-1") {
        nums.pop();
        break;
    }
}

let maxNum = Math.max.apply(null, nums);
let minNum = Math.min.apply(null, nums);

for (let i = 0; i < nums.length; i++) {
    suma += nums[i];
}

document.write("El numero mas alto es: ", maxNum, "<br>",
               "El numero mas bajo es: ", minNum, "<br>", 
               "La suma total es: ", suma, "<br>",
               "La cantidad de numeros escritos es de: ", nums.length);