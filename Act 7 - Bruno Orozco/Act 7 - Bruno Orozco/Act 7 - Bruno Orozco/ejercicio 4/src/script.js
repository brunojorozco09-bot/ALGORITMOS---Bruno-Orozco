/*
Ejercicio 4: Simulador de Apuestas

Crear un juego en el que el usuario elija un número del 1 al 10. El sistema generará un
número aleatorio con Math.random() y determinará si ganó o perdió. El programa
debe:
1. Comparar ambos números y mostrar un mensaje personalizado con alert() si
acertó o no.
2. Mostrar en consola cuántos intentos lleva el usuario (usar un bucle para
permitir 3 intentos).
3. Si gana en algún intento, mostrar un mensaje final con su nombre en
mayúsculas, de lo contrario mostrar “Intente la próxima”.
*/
let nombre
let num;
let random;


function pregunta(){
 nombre=prompt("ingrese su nombre: ")
}


function numero(){
    random= Math.floor(Math.random() * (10)) + 1;
    for(i=1; i<4; i++){
 num=prompt("escribe un numero del 1 al 10: ")
  console.log("intento numero " + i)
 juego(num)
}
}



function juego(num){
    
    if( i == 3){
        
        alert("Intente la Proxima. el numero era " + random)
    }
    else{

    if(num == random){
        alert("FELICIDADES " + nombre.toUpperCase() + ", GANASTE!!")
    }
    else {
        alert("Reintentar")
        
    }
    }
}

pregunta();
numero();
