/*
2. En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada
cuenta corriente se conoce: número de cuenta y saldo actual. El ingreso de datos debe
finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e
informe:
*/
let n_cuenta=parseInt(prompt("ingrese la cantidad de cuentas: "))
let acreedores=0;
let deudores=0;
let nulo=0;
let suma_total=0;
if(n_cuenta<=0){
    console.log("ERROR. Ingresar un numero de cuentas.")
}
else{
for(let i=1; i<=n_cuenta; i++){
    let saldo=parseInt(prompt("ingresar el saldo de la cuenta " + i))
        if(saldo>0){
            acreedores++;
            console.log("numero de cuenta: " + i + ". Saldo: " + saldo +". Acreedor.")
          suma_total= suma_total + saldo;
        }
        else if(saldo<0){
            deudores++;
            console.log("numero de cuenta: " + i + ". Saldo: " + saldo +". Deudor.")
        }
        else {
            nulo++;
            console.log("numero de cuenta: " + i + ". Saldo: " + saldo +". Nulo.")
        }
        
        
}
 console.log(" sueldo total de los acreedores: " + suma_total)
 }