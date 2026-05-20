/*
Ejercicio 4 – Asistencia de Empleados
Cargar en un vector los nombres de 3 empleados y en una matriz irregular (donde cada fila
representa a un empleado) los días que faltó en un mes (números de día). Mostrar:
● Cantidad de faltas por empleado.
● Empleado que menos veces asistió.
● Empleado que más veces asistió.
*/

let nombres = []


let matriz =[]
let menos = 0
let mas=1000000;
let empleadoM;
let empleadoB;


function nombre(){

    for(i=0; i<4; i++){
nombres[i]=prompt("ingrese el nombre de un vendedor: ")

    }
}
function pregunta(){
    for(i=0; i< nombres.length; i++){
        matriz[i]=prompt("indicar cuantos dias " + nombres[i] + " faltó.")
        console.log(nombres[i] + " faltó " + matriz[i] + " dias.")

        if(matriz[i] > menos ){
        menos = matriz[i]
        empleadoM = nombres[i]
        }

        if(matriz[i] < mas ){
        mas = matriz[i]
        empleadoB = nombres[i]
        }
    }
        
    
   

console.log("el empleado que menos asistió fue " + empleadoM + ", con " + menos + " inasistencia/s")
console.log("el empleado que mas asistió fue " + empleadoB + ", con tan solo " + mas + " inasistencia/s")



}




nombre();
pregunta();

