/*
1. Desarrollar un programa que permita cargar n números enteros y luego nos
informe cuántos valores fueron pares y cuántos impares.
Emplear el operador “%” en la condición de la estructura condicional:
if (valor%2==0) //Si el if da verdadero luego es par.
*/
let cant=parseInt(prompt("ingrese la cantidad de vecesque desea escribir un numero:"))

for(i=0; i<cant; i++){
let num = parseInt(prompt("ingrese un numero:"))
if(num %2 ==0){
console.log("numero ingresado: " + num + ", PAR.")
}

else {
    console.log("numero ingresado: " + num + ", IMPAR.")
}
}
