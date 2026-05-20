let num, una, dos, tres;

num=parseInt(prompt("ingrese un numero: "));

if(num<=9){
    console.log("su numero tiene una cifra");
}
else if(num>=10 && num<=99){
    console.log("su numero tiene dos cifras");
}
else if (num>=100){
     console.log("su numero tiene tres cifras");
}
