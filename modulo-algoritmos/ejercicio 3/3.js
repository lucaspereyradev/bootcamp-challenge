// Por teclado se ingresa el valor hora de un empleado. Posteriormente se ingresa el
// nombre del empleado, la antigüedad y la cantidad de horas trabajadas en el mes. Se
// pide calcular el importe a cobrar teniendo en cuenta que al total que resulta de
// multiplicar el valor hora por la cantidad de horas trabajadas. Además, si el empleado
// tiene más de 10 años de antigüedad hay que sumarle la cantidad de años trabajados
// multiplicados por $30. Imprimir en pantalla el nombre, la antigüedad y el total a cobrar

let valorHora = prompt("Ingresa el valor de la hora"); // digitar valor de la hora
const nombre = prompt("Ingresa tu nombre"); // digitar el nombre de la persona
let antiguedad = prompt("Ingresa la antiguedad"); // digitar la antiguedad de la persona
let cantHoras = prompt("Ingresa la cantidad de horas trabajadas");  // digitar cantidad de horas trabajadas
let salario; // variable donde se almacena el salario a cobrar
let agregado; // variable que almacena el agregado al salario

salario = valorHora*cantHoras; // calcular salario

if (antiguedad > 10) {  // condicional para agregar o no el agregado por antiguedad al salario
    agregado = antiguedad * 30;
    salario += agregado;
}

document.write("Nombre: ", nombre,  "<br>", 
               "Antiguedad: ", antiguedad, "<br>",
               "A cobrar: ", salario);