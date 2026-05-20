let num1, num2, num3;

num1=parseInt(prompt("ingresar el primer numero: "));
num2=parseInt(prompt("ingresar el segundo numero: "));
num3=parseInt(prompt("ingresar el tercer numero: "));

if(num1>num2 && num2>num3 && num1>num3){
 console.log("el orden de los numeros de mayor a menor es de: " + num1 +", " + num2 + ", " + num3)   
}
else if(num2<num3 && num2>num1 && num3>num1){
 console.log("el orden de los numeros de mayor a menor es de: " + num3 +", " + num2 + ", " + num1)   
}

else if(num1>num3>num2){
 console.log("el orden de los numeros de mayor a menor es de: " + num1 +", " + num3 + ", " + num2)   
}
else if(num1<num3<num2){
 console.log("el orden de los numeros de mayor a menor es de: " + num2 +", " + num3 + ", " + num1)   
}