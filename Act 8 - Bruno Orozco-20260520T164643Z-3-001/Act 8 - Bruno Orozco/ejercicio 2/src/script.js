/*
2. Confeccionar una función que nos retorne un string con el siguiente formato:
Hoy es Lunes 9 de Agosto de 2021
Para poder recuperar el día de la semana debemos llamar al método:
let diaSemana=fecha.getDay();
El método getDay() devuelve el día de la semana de la fecha especificada,
siendo 0 (Domingo) el primer día.
*/

function obtenerFecha(){
    let fecha = new Date();
    
    let dia = fecha.getDay();
    let diaSemana;

    if (dia == 0) diaSemana = "Domingo";
    else if (dia == 1) diaSemana = "Lunes";
    else if (dia == 2) diaSemana = "Martes";
    else if (dia == 3) diaSemana = "Miércoles";
    else if (dia == 4) diaSemana = "Jueves";
    else if (dia == 5) diaSemana = "Viernes";
    else if (dia == 6) diaSemana = "Sábado";

    let mes = fecha.getMonth();
    let meses;

    if (mes == 0) mes = "Enero";
    else if (mes == 1) meses = "Febrero";
    else if (mes == 2) meses = "Marzo";
    else if (mes == 3) meses = "Abril";
    else if (mes == 4) meses = "Mayo";
    else if (mes == 5) meses = "Junio";
    else if (mes == 6) meses = "Julio";
    else if (mes == 7) meses = "Agosto";
    else if (mes == 8) meses = "Septiembre";
    else if (mes == 9) meses = "Octubre";
    else if (mes == 10) meses = "Noviembre";
    else if (mes == 11) meses = "Diciembre";

    let dias = fecha.getDate();
    let año = fecha.getFullYear();

    return "Hoy es " + diaSemana + " " + dias + " de " + meses + " de " + año;
}

console.log(obtenerFecha());