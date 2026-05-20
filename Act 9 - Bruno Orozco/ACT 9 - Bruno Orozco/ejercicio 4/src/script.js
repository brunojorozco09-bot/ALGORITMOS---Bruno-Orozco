/*
4. Cargar un array con la producción (en unidades) de una fábrica durante 10
días.
Incluir:
● Cálculo de la producción total en esos 10 días.
● Muestra de los días donde la producción superó las 200 unidades.
● Indicar si hubo algún día con producción igual a 0.
*/
let total=0;
let produccion = [10];

function preguntas(){
    for (let i = 0; i < 10; i++) {
        produccion[i] = parseInt(prompt("Ingrese la producción del día " + (i + 1)));
    }
}

function produccionTotal(){
    for (let i = 0; i < produccion.length; i++) {
        total += produccion[i];
    }
    console.log("La producción total en esos 10 días es: " + total);
}

function produccionMayor200(){
for (let i = 0; i < produccion.length; i++) {
    if (produccion[i] > 200) {
        console.log("El día " + (i + 1) + " superó las 200 unidades con una producción de: " + produccion[i]);
        }
    }
}

function produccionCero(){
    for (let i = 0; i < produccion.length; i++) {
        if (produccion[i] == 0) {
            console.log("El día " + (i + 1) + " tuvo una producción igual a 0.");
        }
    }
}

preguntas();
produccionTotal();
produccionMayor200();
produccionCero();