/*
Ejercicio 2: Simulador de Sorteo con Nombres
Pedir al usuario 5 nombres. Luego, crear una función que:
1. Seleccione un nombre al azar y lo convierta a mayúsculas.
2. Mostrar el nombre ganador por consola y con alert().
3. Incluir una función extra que informe cuántas letras tiene el nombre ganador.
4. Si el nombre tiene más de 6 letras, mostrar un mensaje especial en consola.
*/
let nombre1
let nombre2
let nombre3
let nombre4
let nombre5

function preguntas(){
 nombre1 = prompt("Ingresa el nombre 1:");
 nombre2 = prompt("Ingresa el nombre 2:");
 nombre3 = prompt("Ingresa el nombre 3:");
 nombre4 = prompt("Ingresa el nombre 4:");
 nombre5 = prompt("Ingresa el nombre 5:");

}

function informarLargo(nombre) {
    return nombre.length;
}

function simularSorteo() {
    let azar = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    let ganador;

    if (azar === 1) ganador = nombre1;
    else if (azar === 2) ganador = nombre2;
    else if (azar === 3) ganador = nombre3;
    else if (azar === 4) ganador = nombre4;
    else ganador = nombre5;

    ganador = ganador.toUpperCase();


    console.log("El nombre ganador es: " + ganador);
    alert("El ganador es: " + ganador);

    let totalLetras = informarLargo(ganador);
    console.log("El nombre tiene " + totalLetras + " letras");

    
    if (totalLetras > 6) {
        console.log("Tienes un nombre de mas de 6 letras");
    }
}

preguntas()
simularSorteo();
informarLargo();