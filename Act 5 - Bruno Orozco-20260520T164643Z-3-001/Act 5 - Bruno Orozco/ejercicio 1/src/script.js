/*
Punto 1:
Crear una función llamada calcularImpuesto que reciba como parámetro un sueldo y
devuelva cuánto debe pagar de impuesto, según las siguientes condiciones:
● Si el sueldo es menor a 100000, no paga impuesto.
● Si está entre 100000 y 250000, paga el 15%.
● Si es mayor a 250000, paga el 25%.
Luego, pedir al usuario que ingrese 5 sueldos, calcular el impuesto de cada uno y mostrarlo
con un mensaje en consola.
*/
for(i=1; i<6; i++){
let sueldoo=parseInt(prompt("ingrese el sueldo numero " + i))
let impuesto= calcularImpuesto(sueldoo)
console.log("impuesto a pagar: " + impuesto )
}
function calcularImpuesto(sueldoo){
    if(sueldoo<100000){
        return 0
    }
    else if(sueldoo>=100000 && sueldoo<=250000){
        return sueldoo * 0.15
    }
    else if(sueldoo>250000){
        return sueldoo *0.25
    }
}
