// Si pulso un botón de número diferente a cero y en el display hay un cero tiene
// que sustituirse el cero por el número pulsado. Sino debe sustituirse el valor
// de la pantalla nuevamente por 0

// Si pulso en borrar el último caracter y sólo queda un caracter en la pantalla se debe
// sustituir por un cero el valor de la pantalla. Descubir una función de js para contar
// el número de caracteres de una cadena de texto.

// Si pulso el boton de punto y no hay ningún operador en la pantalla sólo puedo escribir un punto. En 
// cambio si hay un operador en la pantalla entonces sólo puedo escribir dos puntos. Descubrir
// una función que cuente cuantas veces aparece un caracter en un cadena de texto.

// Si pulso un botón de operador y hay un operador en pantalla.
// En caso de que el operador de la pantalla sea la última posición entonces:
// - si son iguales no ocurre nada
// - si son diferentes se sustituye
// En caso de que la última posición de la pantalla sea un número entonces:
// - hace el calculo y añade el operador pulsado al final

let numbers = document.querySelectorAll(".number");
let operators  = document.querySelectorAll(".operator");
let calculate =  document.querySelector(".calculate");
let point =  document.querySelector(".point");
let clear =  document.querySelector(".clear");
let clearLast =  document.querySelector(".clear-last");
let display = document.querySelector(".display");

// for (i=0; i < frutas.length; i++) {
//     frutas[i] = fruta[i];
// }

numbers.forEach(number => {

    number.addEventListener("click", () => {

        if (display.innerHTML == "0") {

            display.innerHTML = number.dataset.number;
        }
        else {
            display.innerHTML += number.dataset.number;
        }
    });
});

operators.forEach(operator => {

    operator.addEventListener("click", () => {

        if ((display.innerHTML == "+") || (display.innerHTML == "-") || (display.innerHTML == "x") || (display.innerHTML == "/")) {

            display.innerHTML = operator.dataset.operator;
        }
        else {

            display.innerHTML += operator.dataset.operator;
        }
    });
});

point.addEventListener("click", () => {

    if (display.innerHTML == ".") {

        display.innerHTML = point.dataset.point;
    }
    else {

        display.innerHTML += point.dataset.point;
    }
});

clear.addEventListener("click", () => {
    display.innerHTML = 0;
});

clearLast.addEventListener("click", () => {

    display.innerHTML = display.splice(display.length, 0);
    // Descubrir una función de js que permita eliminar el último carácter de una cadena de texto
    // posiblemente "array.splice"
});

calculate.addEventListener("click", () => {
    // Descubrir una función de js para calcular cadena de texto
});