//1. Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.

let num1, num2, suma, diferencia, producto, division;



num1 = parseFloat(prompt("ingresar el primer numero: "))
num2 = parseFloat(prompt("ingresar el segundo numero: "))

if(num1>num2){
    suma = num1 + num2;
    diferencia = num1 - num2;
    console.log("la suma del primer y segundo numero es: " + suma + ", y su diferencia es de " + diferencia);

}

else if (num1<num2){
    producto = num1 * num2;
    division= num1 / num2;
    console.log ("el producto del primer y segundo numero es: ", producto, ", y su division es: ", division);

}
