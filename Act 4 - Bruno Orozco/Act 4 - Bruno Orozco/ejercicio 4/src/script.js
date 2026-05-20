/*
4. Se cuenta con la siguiente información:
● Las edades de 20 estudiantes del turno mañana.
● Las edades de 30 estudiantes del turno tarde.
● Las edades de 15 estudiantes del turno noche.
Las edades de cada estudiante deben ingresar por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios)
b) Imprimir dichos promedios (promedio de cada turno)
c) Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades menor.
*/

let tm=20;
let tt=30;
let tn=15;
let sm=0;
let st=0;
let sn=0;
for(i=1; i<tm +1; i++)
{
    let em =parseInt(prompt("ingrese la edad del estudiante numero " + i + " del turno mañana:"))
     sm= sm + em
}

for(i=1; i<tt +1; i++)
{
    let et =parseInt(prompt("ingrese la edad del estudiante numero " + i + " del turno tarde:"))
     st= st + et
}

for(i=1; i<tn +1; i++)
{
    let en =parseInt(prompt("ingrese la edad del estudiante numero " + i + " del turno noche:"))
     sn= sn + en
}
sm = sm / 20;
st = st / 30;
sn = sn / 15;

console.log("promedio de edad de los estudiantes del turno mañana: " + sm)
console.log("promedio de edad de los estudiantes del turno tarde: " + st)
console.log("promedio de edad de los estudiantes del turno noche: " + sn)

if(sm<st && sm<sn){
    console.log("el promedio de edades menor es el de la mañana")
}

else if(sm>st && st<sn){
    console.log("el promedio de edades menor es el de la tarde")
}

else if(sm>sn && sm>sn){
    console.log("el promedio de edades menor es el de la noche")
}