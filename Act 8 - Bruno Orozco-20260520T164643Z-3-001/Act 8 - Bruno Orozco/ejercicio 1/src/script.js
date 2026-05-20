/*
1. Confeccionar un programa que muestre en que cuatrimestre del año nos
encontramos. Para esto obtener el mes.
*/
function cuatrimestre(){

let fecha = new Date()

console.log(" estamos en el mes " + (fecha.getMonth() +1 ) )

if(fecha.getMonth()==3 || fecha.getMonth()==4 || fecha.getMonth()==5 || fecha.getMonth()==6)
{
    console.log("estamos en el primer cuatrimestre")
}

else if (fecha.getMonth() ==7 || fecha.getMonth()==8 || fecha.getMonth()==9 || fecha.getMonth()==10){
    console.log("estamos en el segundo cuatrimestre")
}
}
cuatrimestre(); 