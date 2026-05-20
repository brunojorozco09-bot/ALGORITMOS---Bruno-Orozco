/*
Punto 6: Calculadora de Gastos de Viaje
Crear una función llamada calcularCostoFinal que reciba el precioBase del pasaje y el
destino (nacional o internacional)).
● Si el destino es nacional, se aplica un impuesto del 10%.
● Si el destino es internacional, se aplica un impuesto del 35% y una tasa fija de
$5000 por uso de aeropuerto. La función debe devolver el costo total. Luego, pedir al
usuario que cargue 4 pasajes, calcular el costo de cada uno y, al final del programa,
mostrar el monto total recaudado por la agencia de viajes.
*/

let precioBase;
let destino;
let monto=0;


for(i=0; i<4; i++){
    destino=parseInt(prompt("ingrese tipo de destino (nacional=1 o internacional=2) "));
    precioBase=parseInt(prompt("ingresar precio base: "));
    console.log(calcularCostoFinal(precioBase, destino))

    }


function calcularCostoFinal(precioBase, destino){
    if(destino==1){
    precioBase = precioBase + precioBase * 0.10
    console.log("precio totalA: " + precioBase)
    monto = monto + precioBase
    return precioBase
    }
    else if(destino ==2){
    precioBase = precioBase + precioBase * 0.35 + 5000;
    console.log("precio totalB: " + precioBase)
    monto = monto + precioBase
    return precioBase
    }
}
console.log("Monto total recaudado: " + monto)


 