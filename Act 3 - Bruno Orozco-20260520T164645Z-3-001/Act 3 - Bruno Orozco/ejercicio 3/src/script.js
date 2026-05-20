/*3. Confeccionar un programa que le permita al usuario ingresar un valor del 1 al 10 y nos
muestre la tabla de multiplicar del mismo (los primeros 13 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el
39.
*/
 let valor=parseInt(prompt("ingresar un numero del 1 al 10: "))
  let mult= 0
console.log ("tabla del numero " + valor + " del 1 al 13: ")
for(let i=1; i<14; i++){
    mult = valor * i;
    console.log (mult + ". ")
}