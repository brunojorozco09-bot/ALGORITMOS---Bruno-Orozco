/*
4. Ingresar por teclado un valor y luego mostrar la raíz cuadrada de dicho valor.
*/


let num;

function pregunta(){
    num=prompt("ingrese un numero: ")
}
function potencia(){
  console.log("numero elevado a la raiz cuadrada " + Math.sqrt(num))
}

pregunta()
potencia()