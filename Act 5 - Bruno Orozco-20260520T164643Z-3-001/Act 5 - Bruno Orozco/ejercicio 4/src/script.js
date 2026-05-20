/*
Punto 4:
Diseñar una función llamada contarVotos que reciba una lista de respuestas (por ejemplo:
“sí”, “no”, “ns/nc”) y cuente cuántos votos hay de cada tipo.
Pedir al usuario que cargue 10 respuestas (simuladas con prompt) y mostrar un resumen
con los totales.
*/
let votos;
let votosNS=0
let votosSi=0
let votosNo=0

for (i=0;i<10; i++){
     votos = prompt("Ingrese su voto (si/no/ns): ")
contarVotos(votos)
}
function contarVotos(votos){
    if(votos=="si" || votos=="SI" || votos=="sI" || votos=="Si")
    {
        votosSi++
    }
    else if(votos=="no" || votos=="NO" || votos=="nO"|| votos=="No"){
    votosNo++
    }
    else if(votos=="ns" || votos=="NS" || votos=="nc" || votos=="NC" || votos=="nC"|| votos=="Nc" || votos=="Ns"|| votos=="nS"){
        votosNS++
    }
}
console.log("cantidad de votos a favor: " + votosSi)
console.log("cantidad de votos en contra: " + votosNo)
console.log("cantidad de votos en blanco: " + votosNS)