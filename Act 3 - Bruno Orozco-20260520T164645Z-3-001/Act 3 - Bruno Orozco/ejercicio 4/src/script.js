/*
4. Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores ingresados negativos.
b) La cantidad de valores ingresados positivos.
c) La cantidad de múltiplos de 5.
d) El valor acumulado de los números ingresados que son pares.
*/
let neg=0;
let pos=0;
let sumaPares=0;
let mult5=0
for(i=1; i<=10; i++){
    let valor=parseInt(prompt("ingresa el valor numero " + i))
   if(valor<=0){
    neg++
    }
    else if(valor>0){  
        pos++
    }
    if(valor % 5 === 0){
      mult5++
    }
    if(valor % 2 === 0){
      sumaPares = sumaPares + valor
    }
}
 console.log("cantidad de numeros positivos: " + pos)
 console.log("cantidad de numeros negativos: " + neg)
 console.log("cantidad de numeros multiplos de 5: " + mult5)
 console.log("suma de los numeros pares: " + sumaPares)
