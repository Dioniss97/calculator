// Si pulso un botón de número diferente a cero y en el display hay un cero tiene
// que sustituirse el cero por el número pulsado. Sino debe sustituirse el valor
// de la pantalla nuevamente por 0.

// Si pulso en borrar el último caracter y sólo queda un caracter en la pantalla se debe
// sustituir por un cero el valor de la pantalla. Descubir una función de js para contar
// el número de caracteres de una cadena de texto.

// Si pulso el boton de punto y no hay ningún operador (osea un "0") en la pantalla sólo puedo escribir un punto. En 
// cambio si hay un operador en la pantalla entonces sólo puedo escribir dos puntos. Descubrir
// una función que cuente cuantas veces aparece un caracter en un cadena de texto.
// Y no solo hay que contar la cantidad de puntos, sino que hay que contarlos de operador en operador,
// osea que el operador separe cada grupo de cifras para luego controlar que solo exista un punto en cada uno de estos grupos.
// Descubrir cómo trocear una string en varias strings para luego contar los puntos en cada una con un bucle.

// Si pulso un botón de operador y hay un operador en pantalla.
// En caso de que el operador de la pantalla sea la última posición entonces:
// - si son iguales no ocurre nada.
// - si son diferentes se sustituye.
// En caso de que la última posición de la pantalla sea un número entonces:
// - hace el calculo y añade el operador pulsado al final.



// Declaración de variables

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let calculate = document.querySelector(".calculate");
let point = document.querySelector(".point");
let clear = document.querySelector(".clear");
let clearLast = document.querySelector(".clear-last");
let display = document.querySelector(".display");

// Función encargada de contar la cantidad de caracteres de la cadena y el caracter que le pases como parametros.
function howManyAppear(cadena, caracter) {
    let cuantas = [];
    for (let i = 0; i < cadena.length; i++) {

        if (cadena[i].toLowerCase() === caracter) {

            cuantas.push(i);
        }
    }
    return cuantas.length;
}

numbers.forEach(number => {

    number.addEventListener("click", () => {

        // Aquí se controla que: si (if) hay un "0" en pantalla se sustituya por un numero(number.dataset.number)
        // y si no (osea el "else") se añada el numero al que ya se muestra.

        if (display.innerHTML == "0") {

            display.innerHTML = number.dataset.number;
        } else {

            display.innerHTML += number.dataset.number;
        }
    });
});

operators.forEach(operator => { 

    operator.addEventListener("click", () => {

        let last = display.innerHTML.charAt(display.innerHTML.length - 1);

        console.log(last);
        console.log(display.innerHTML.slice(0, -1));

        if ((last == "+") || (last == "-") || (last == "x") || (last == "/")) {

            display.innerHTML = display.innerHTML.slice(0, -1);
            display.innerHTML += operator.dataset.operator;

        } else {

            display.innerHTML += operator.dataset.operator;

        }
    });
});

point.addEventListener("click", () => {

    let last = display.innerHTML.charAt(display.innerHTML.length - 1);

    let howMany = howManyAppear(display.innerHTML, point.dataset.point);
    console.log(howManyAppear(display.innerHTML, point.dataset.point));

    if (last == ".") {

        display.innerHTML = display.innerHTML.slice(0, -1);
        display.innerHTML += point.dataset.point;

    } else if (howMany > 1) {
            // No sucede nada
    } else if ((last == "+") || (last == "-") || (last == "x") || (last == "/")) {
            // No sucede nada
    } else {

        display.innerHTML += point.dataset.point;

    }
});

clear.addEventListener("click", () => {

    display.innerHTML = "0";
});

clearLast.addEventListener("click", () => { 
    
    // Aquí se controla que: si la CANTIDAD de caracteres en pantalla es mayor que 1 se elimine el último caracter introducido
    // y si solo queda un número en pantalla se muestre un "0".

    if (display.innerHTML.length > 1) {

        display.innerHTML = display.innerHTML.slice(0, -1);
    } else {

        display.innerHTML = "0";
    }
});

calculate.addEventListener("click", () => {

    // Función de js para calcular la cadena de texto que se muestra en pantalla al darle al botón de igual.

    display.innerHTML = eval(display.innerHTML);
});