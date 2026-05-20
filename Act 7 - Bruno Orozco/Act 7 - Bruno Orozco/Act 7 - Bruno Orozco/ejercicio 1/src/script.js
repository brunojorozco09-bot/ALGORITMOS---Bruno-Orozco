/*
Ejercicio 1: Sistema de Registro de Usuarios
Crear un sistema donde se le pida al usuario su nombre completo, fecha de
nacimiento (año), y una contraseña. El sistema debe:
1. Generar un nombre de usuario tomando las 3 primeras letras del nombre, las
3 últimas del apellido y el año de nacimiento, todo en minúsculas.
2. Calcular la edad usando el año actual.
3. Validar que la contraseña tenga al menos 6 caracteres. Si no cumple, informar
mediante un alert().
4. Mostrar todos los datos correctamente formateados en consola.
*/

let nac= parseInt;
let nombre
let apellido  
let contr
let usuN;
let usuA;
let usu;
let hoy=parseInt;


function preguntas(){
    nombre=prompt("ingrese su nombre: ");
apellido=prompt("ingrese su apellido: ");
nac = prompt("ingrese su año de nacimiento: ")
contr=prompt("ingrese su contraseña: ")
}


function alerta(contr){
if(contr.length>=6){
    console.log("tu contraseña es: " + contr)
}
else if (contr.length<=5){
    alert("Tu contraseña tiene menos de 6 caracteres")
}
}


function usuario(nombre, apellido){

usuN = nombre.slice(0, 3)
usuA = apellido.slice(-3)
usu= usuN + usuA;
console.log("nombre de usuario: " + usu.toLowerCase() + nac)
}


function edad(nac){
     hoy = 2026
     hoy = hoy - nac
     console.log("tienes " + hoy + " años.")
 
}

preguntas()
usuario(nombre, apellido)
alerta(contr)
edad(nac);
