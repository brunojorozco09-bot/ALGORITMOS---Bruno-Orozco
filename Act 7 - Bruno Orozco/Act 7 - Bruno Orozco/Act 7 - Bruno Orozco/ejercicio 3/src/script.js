/*
Ejercicio 3: Conversor de Texto con Análisis
Crear una función que reciba un texto por parte del usuario y realice lo siguiente:
1. Mostrar el texto en consola, en minúsculas y mayúsculas.
2. Mostrar cuántos caracteres tiene el texto total y cuántas vocales posee
(contando con un bucle).
3. Usar slice() para mostrar solo las 5 primeras letras.
4. Validar que el texto no esté vacío (mostrar alert() si lo está).
*/
let carac=0;
let voc=0
let vocales="aeiouAEIOU";
let text=prompt("ingrese un texto: ")
let totalLetras = text.length

function ERROR(){
if (text==""){
    alert("ERROR, texto vacio.")
}
}

function primerasLetras(text){
    console.log(text.slice(0,5))
}

function texto(text){

    console.log(text.toLowerCase())
    console.log(text.toUpperCase())
}

function textoTotal(){
 for(i=0; i<totalLetras; i++){
    if(vocales.includes(text[i])){
voc++
carac++
    }
    else{
        carac++
    }
}

}   

ERROR();
textoTotal();
texto(text)
primerasLetras(text)
console.log("cantidad de vocales: " + voc)
console.log("cantidad de caracteres: " + carac)
