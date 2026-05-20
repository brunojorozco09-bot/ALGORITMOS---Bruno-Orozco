/*
Punto 5: Sistema de Control de Aforo (Discoteca/Evento)
Crear una función llamada permitirIngreso que reciba dos parámetros: edad y
tieneEntrada (booleano). La función debe devolver true si la persona es mayor de 18 años
y tiene entrada, o false en caso contrario. Luego, simular el ingreso de 10 personas
pidiendo los datos por consola (o prompt). Al finalizar, mostrar un resumen que indique:
● Cuántas personas pudieron ingresar.
● Cuántas fueron rechazadas por ser menores de edad.
● Cuántas fueron rechazadas por no tener entrada.
*/
let menE=0;
let sinE=0;
let acep=0;
let edad;
let tieneEntrada;
for(i=1; i<11; i++){
edad=parseInt(prompt("ingrese su edad: "))
tieneEntrada=prompt("tiene entrada? ")
console.log(permitirIngreso(edad,tieneEntrada))
}

function permitirIngreso(edad, tieneEntrada){
   if(tieneEntrada=="si"){
    tieneEntrada=true
   }
   else if(tieneEntrada=="no"){
    tieneEntrada=false
   }
    if (edad>18 && tieneEntrada==true){
       console.log("acceso aceptado")
       acep++
        return true;
    }
    else if(edad<18 && tieneEntrada==true ){
        console.log("acceso denegado por ser menor de edad. ")
        menE++
        return false
    }
    else if(tieneEntrada==false && edad>18 ){
        console.log("acceso denegado por no tener entrada. ")
        sinE++
        return false
    }
    else if(tieneEntrada== false && edad<18){
        sinE++
        menE++
        console.log("acceso denegado por no tener entrada y ser menor de edad. ")
        return false;
    }
}
console.log ("----RESUMEN----")
console.log("cantidad de gente rechazada por edad: " + menE)
console.log("cantidad de gente rechazada por entrada: " + sinE)
console.log("cantidad de gente aceptada: " + acep)