/*
3. Pedir al usuario que ingrese las puntuaciones obtenidas en 6 partidas seguidas
de un videojuego.
El programa debe:
● Mostrar la puntuación más alta y la más baja.
● Calcular el promedio de puntuación.
● Contar cuántas veces superó los 500 puntos.
*/

let puntuaciones = new Array(6);
let puntuacionMasAlta =0;
let puntuacionmasBaja = 9999999999;
let promedio = 0;
function preguntas(){
    for(let i = 0; i < puntuaciones.length; i++){
        puntuaciones[i] = parseInt(prompt("Ingrese la puntuación de la partida numero " + (i + 1) + ": "));
    }
}

function puntuacionmasAlta(){
   for(let i = 0; i < puntuaciones.length; i++){
   if(puntuaciones[i] > puntuacionMasAlta){
   puntuacionMasAlta = puntuaciones[i];
   }
}
 console.log("La puntuación más alta es: " + puntuacionMasAlta);
   
}

function puntuacionMasBaja(){
   for(let i = 0; i < puntuaciones.length; i++){
   if(puntuaciones[i] < puntuacionmasBaja){
   puntuacionmasBaja = puntuaciones[i];
   }
}
 console.log("La puntuación más baja es: " + puntuacionmasBaja);
   
}

function Promedio(){
    for(let i = 0; i < puntuaciones.length; i++){
        promedio += puntuaciones[i];
    }
    promedio = promedio / 6;
    console.log("El promedio de puntuación es: " + promedio);
}

function mayor500(){
    let contador = 0;
    for(let i = 0; i < puntuaciones.length; i++){
        if(puntuaciones[i] > 500){
            contador++;
        }
    }
    console.log("La cantidad de veces que se superó los 500 puntos es: " + contador);
}

preguntas();
puntuacionmasAlta();
puntuacionMasBaja();
Promedio();
mayor500();