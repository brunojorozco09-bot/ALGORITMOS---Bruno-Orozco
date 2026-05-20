/*
Ejercicio 1 – Registro de Alumnos y Calificaciones
Ingresar en un vector los nombres de 4 alumnos y en otro vector paralelo sus promedios.
Mostrar:
● El nombre y promedio de cada alumno.
● El alumno con el promedio más alto.
● El alumno con el promedio más bajo.
● Promedio general de todos los alumnos.
*/

let alumnos = [[], []];

let promA= alumnos[1][0];
let promB= alumnos[1][0];
 let suma = 0;
function nombres(){
for(i=0; i<4; i++){
alumnos[0][i]=prompt("ingrese el nombre de un alumno: ")
alumnos[1][i]=parseInt(prompt("ingrese el promedio de " + alumnos[0][i]))
}

 for (i=0; i<alumnos[0].length; i++) {
        suma += alumnos[1][i];
    }

promA= alumnos[1][0];
promB= alumnos[1][0];

 let promedio = suma / 4;
    console.log("El promedio general de todos los alumnos es " + promedio);
}
function promedioAlto()
{
   for (i=0; i<alumnos[0].length; i++) {
    if (alumnos[1][i] > promA) {
        promA = alumnos[1][i];
    }
}
    console.log("El alumno con el promedio más alto tiene un promedio de " + promA);
}
function alumno(){
     for (i=0; i<alumnos[0].length; i++) {
    console.log(alumnos[0][i] + " tiene un promedio de " + alumnos[1][i]);
}
}

function promedioBajo()
{
   for (i=0; i<alumnos[0].length; i++) {
    if (alumnos[1][i] <= promB) {
        promB = alumnos[1][i];
    }
}
    console.log("El alumno con el promedio más bajo tiene un promedio de " + promB);
}


nombres();
alumno();
promedioAlto();
promedioBajo();
