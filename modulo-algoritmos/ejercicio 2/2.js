// Escribe una aplicación que solicite al usuario que ingrese una contraseña cualquiera.
// Después se le pedirá que ingrese nuevamente la contraseña, con 3 intentos. Cuando
// acierte ya no pedirá más la contraseña y mostrará un mensaje diciendo “Felicitaciones,
// recordás tu contraseña”. Si falla luego de 3 intentos se mostrará el mensaje “Tenes que
// ejercitar la memoria”. Los mensajes quedarán en pantalla a la espera que el usuario
// presione una tecla, luego de esto se cerrará el programa.

let contrasena = prompt("Escribe la contraseña"); // Digitar contraseña
let intentos = 3; // numero de intentos disponibles

for (let i = 0; i < 3; i++) {   
    let intento = prompt("Repite la contraseña");   // pide que repitas la contraseña para comenzar el condicional
    if (contrasena === intento) { 
        alert("Felicitaciones, recordás tu contraseña");
        break;  // Si la contraseña es correcta se rompera el bucle
    }
    else {
        intentos-- // cada ves que sea incorrecta se restara 1 vida
        if(intentos === 0){ // cuando llega a 0 intentos mostrara esta alerta
            alert("Tenes que ejercitar la memoria");
        }
    }
}