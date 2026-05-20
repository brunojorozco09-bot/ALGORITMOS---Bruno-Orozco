/*3. Un postulante a un empleo, realiza un test de capacitación, se obtuvo la siguiente información: cantidad total de preguntas que se le realizaron y la cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que ingrese los dos datos por teclado e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:

Nivel máximo: Porcentaje>=90%.     
Nivel medio: Porcentaje>=75% y <90%.
Nivel regular: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%.
*/

let preH, preC, porcentaje;

preH=parseInt(prompt("ingrese cuantas preguntas le hicieron: "));
preC=parseInt(prompt("ingrese cuantas preguntas contestó bien: "));

porcentaje = preC / preH  * 100;

if(porcentaje<50){
    console.log("estas fuera de nivel.")
}
else if(porcentaje>=50 && porcentaje<=75){
    console.log("estas en nivel regular")
}
else if(porcentaje>=75 && porcentaje<90){
    console.log("estas en el nivel medio")
}
else if (porcentaje>=90){
    console.log("felicidades, estas en el nivel maximo!")
}