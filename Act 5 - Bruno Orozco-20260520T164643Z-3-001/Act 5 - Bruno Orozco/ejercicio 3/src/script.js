/*
Punto 3:
Crear una función llamada promedioTemperaturas que reciba un arreglo de números y
devuelva el promedio.
Luego, simular la carga de temperaturas diarias durante una semana (7 días), calcular el
promedio y mostrar si cada día estuvo por encima o por debajo del promedio.
*/
function promedioTemperaturas(temperaturas) {
    let suma = 0;

    for (let i = 0; i < 7; i++) {
        suma += temperaturas[i];
    }

    return suma / 7;
}


let temps = [];

for (let i = 0; i < 7; i++) {
    temps[i] = parseFloat(prompt("Ingrese la temperatura del día " + (i + 1) + ":"));
}


let promedio = promedioTemperaturas(temps);

console.log("El promedio de temperaturas es: " + promedio);


for (let i = 0; i < 7; i++) {
    if (temps[i] > promedio) {
        console.log("Día " + (i + 1) + ": " + temps[i] + " (por encima del promedio)");
    } else if (temps[i] < promedio) {
        console.log("Día " + (i + 1) + ": " + temps[i] + " (por debajo del promedio)");
    } else {
        console.log("Día " + (i + 1) + ": " + temps[i] + " (igual al promedio)");
    }
}