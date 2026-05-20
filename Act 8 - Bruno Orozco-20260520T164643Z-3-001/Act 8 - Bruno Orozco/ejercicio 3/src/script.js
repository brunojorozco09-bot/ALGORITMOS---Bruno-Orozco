/*
3. Confeccionar un programa que solicite el ingreso de un número y nos muestre
dicho valor elevado a la tercera potencia.
*/

let num;

function pregunta(){
    num=prompt("ingrese un numero: ")
}
function potencia(){
  console.log("numero elevado a la tercera potencia: " + Math.pow(num,3))
}

pregunta()
potencia()