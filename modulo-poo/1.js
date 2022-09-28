// Haz una clase llamada Password que siga las siguientes condiciones:
// ● Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8 caracteres.
// ● Los constructores serán los siguiente:
// ■ Un constructor por defecto.
// ■ Un constructor con la longitud que nosotros le pasemos (Generará una contraseña aleatoria con esa longitud).
// ● Los métodos que implementa serán:
// ○ esFuerte(): devuelve un booleano si es fuerte o no, para que sea
// fuerte debe tener más de 2 mayúsculas, más de 1 minúscula y más de
// 3 números.
// ○ generarPassword(): genera la contraseña del objeto con la longitud
// que tenga.
// ○ Métodos get para los atributos contraseña y longitud.
// ○ Método set para atributo longitud.
// Crear un proyecto de consola que solicite al usuario una contraseña por teclado y muestre un
// mensaje indicando la contraseña y si es o no fuerte.

const spanGenerar = document.getElementById("spanGenerar");
const spanValidar = document.getElementById("spanValidar");
const generar = document.getElementById("generate");
const validacion = document.getElementById("validate");

class Password {
    constructor(long) {
        this.long = long;
    }
}

let newPassword = new Password(8);

function generatePasswordRand(newPassword) {
    var str =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz0123456789@#$";

    var pass = "";

    for (i = 1; i <= newPassword.long; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
    }
    return pass;
}

function esFuerte() {
    var expreg = /^[A-Z]{2,}\s[a-z]{1,}\s\d{3,}$/;

    if (expreg.test()) {
        alert("El password es seguro");
    } else {
        alert("El password no es seguro");
    }
}

console.log()