/*
1. En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y
$500, realizar un programa que lea los sueldos que cobra cada empleado e
informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más
de $300. Además, el programa deberá informar el importe que gasta la empresa
en sueldos al personal. Los sueldos deben ser cargados por el usuario.
*/
let empleados = parseInt(prompt("ingrese la cantidad de empleados: "));
let entre100_300=0;
let mas_300=0;
let total_sueldos=0;

for(let i=1; i<=empleados; i++){
    let sueldo=parseInt(prompt("ingrese el empleado " + i + ":"))
    if(sueldo>=100 && sueldo<=300){
      entre100_300++;  
    }
    else if(sueldo>300){
        mas_300++;
    }
    total_sueldos = total_sueldos + sueldo;
}

console.log("empleados que cobran entre $100 y $300: " + entre100_300);
console.log("empleados que cobran mas de $300: " + mas_300);
console.log("total de los sueldos de los empleados: " + total_sueldos);