/*
4. De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe:
a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
b)Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en pantalla sin cambios.
*/

let suel, anti, porce, adi;

suel = parseInt(prompt("ingrese su sueldo: "));
anti = parseInt(prompt("ingrese su antiguedad: "));
adi= suel;


if(suel<500 && anti>=10){
    porce= adi / 5
    suel = porce + adi;
    console.log("su sueldo a pagar es de: " + suel);
}
else if (suel<500 && anti<10){
    porce= adi / 20;
    suel= porce + adi;
    console.log("su sueldo a pagar es de: " + suel);
}
else if(suel>=500) {
    console.log("su sueldo a pagar es de: " + suel);
}