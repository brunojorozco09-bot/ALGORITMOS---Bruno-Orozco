/*
1. Desarrollar un programa que permita ingresar un vector de 8 elementos, e
informe:
● El valor acumulado de todos los elementos del vector.
● El valor acumulado de los elementos del vector que sean mayores a 36.
Cantidad de valores mayores a 50.
*/
let vector = [8];
cant50=0;

function preguntas(){
for (let i = 0; i < 8; i++) {
    vector[i] = parseInt(prompt("Ingrese un numero: "));
    total += vector[i];
}
}


function resultados(){
for(i=0; i<vector.length; i++){

if (vector[i] > 36){
totalMayor36 += vector[i];
}

if (vector[i] > 50){
cant50++;
}

}
console.log("El valor acumulado de todos los elementos del vector es: " + total);
console.log("El valor acumulado de los elementos del vector que sean mayores a 36 es: " + totalMayor36);
console.log("La cantidad de valores mayores a 50 es: " + cant50);
}



let total=0;
let totalMayor36=0;


preguntas();
resultados();