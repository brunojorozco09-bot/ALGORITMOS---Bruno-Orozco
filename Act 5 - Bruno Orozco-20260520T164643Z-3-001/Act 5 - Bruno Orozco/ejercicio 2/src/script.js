/*
Punto 2:
Crear una función llamada esPrimo que reciba un número y devuelva true si es primo o
false si no lo es.
Luego, pedir al usuario que ingrese 10 números y mostrar en consola cuáles son primos y
cuáles no.
*/

for(i=0; i<10; i++){
let num=parseInt(prompt("ingrese un numero: "))
let es= esPrimo(num)
console.log(num + ", " + es)
}
function esPrimo(num){
 if (num < 2 ) {
    return false;
 }
 for(let i = 2; i<=Math.sqrt(num); i++){
 if (num % i ===0){
    return false;
 }
 }
 return true
}
