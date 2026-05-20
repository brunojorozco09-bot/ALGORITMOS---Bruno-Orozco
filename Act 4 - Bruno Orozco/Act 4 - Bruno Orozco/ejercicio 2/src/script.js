/*2. Realizar un programa que acumule (sume) valores ingresados por teclado hasta
ingresar el 9999 (no sumar dicho valor, indica que ha finalizado la carga). Imprimir el
valor acumulado e informar si dicho valor es cero, mayor a cero o menor a cero.
*/

let suma=0;
let num;
do{
    num =parseInt(prompt("ingrese numeros (9999 para finalizar)."));
    if(num<9999){
         suma = suma + num;
    }   
} while(num<9999)





    console.log("el valor acumulado es " + suma);

if(suma==0){
    console.log(" (igual a 0)")
}

else if(suma>0){
    console.log(", es mayor a 0")
}

else{
    console.log(", es menor a 0")
}
