/*
2. Realizar un programa que pida la carga de dos vectores numéricos. Obtener la
suma de los dos vectores, dicho resultado guardarlo en un tercer vector del
mismo tamaño. Sumar componente a componente.
El tamaño del vector es a elección.
Mostrar en consola:
● Los dos vectores numéricos.
● Tercer vector con la suma de los otros dos.
*/



function preguntas(){
    vector1[0] = parseInt(prompt("Ingrese un numero para el vector 1: "));
    vector2[0] = parseInt(prompt("Ingrese un numero para el vector 2: "));
    vectorSuma[0] = vector1[0] + vector2[0]; 
}

function resultados(){
    console.log("El vector 1 es: " + vector1);
    console.log("El vector 2 es: " + vector2);
    console.log("El vector suma es: " + vectorSuma);
}

let vector1 = [1];
let vector2 = [1];
let vectorSuma = [1];

preguntas();
resultados();