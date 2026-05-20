/*
3. Realizar un programa que lea los lados de n triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados
iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo que posee menor cantidad.
*/

let tri=parseInt(prompt("ingrese la cantidad de triangulos: "))
let iso=0;
let esc=0;
let equi=0;
for(i=1; i<tri +1; i++){

    let lado=parseInt(prompt("inserte el primer lado"))
    let lado2=parseInt(prompt("inserte el segundo lado"))
    let lado3=parseInt(prompt("inserte el tercer lado"))

    if(lado!=lado2 && lado2 != lado3 && lado3 != lado){
        console.log("triangulo numero " + i + ": ESCALENO")
        esc++
    }

   else if(lado==lado2 && lado2 != lado3 ){
        console.log("triangulo numero " + i + ": ISÓSCELES")
        iso++
    }

   else if(lado==lado2 && lado2 == lado3 ){
        console.log("triangulo numero " + i + ": EQUILATERO")
        equi++
    }
}
 console.log("CANTIDAD DE EQUILATEROS: " + equi)
 console.log("CANTIDAD DE ISOSCELES: " + iso)
 console.log("CANTIDAD DE ESCALENOS: " + esc)

 if(iso>=esc && esc>equi){
    console.log("MENOR CANTIDAD DE TRIANGULOS EQUILATEROS")
 }

 else if(iso<esc && esc<=equi){
    console.log("MENOR CANTIDAD DE TRIANGULOS ISOSCELES")
 }

 else if(iso>esc && esc<equi && equi<=iso ){
    console.log("MENOR CANTIDAD DE TRIANGULOS ESCALENOS")
 }