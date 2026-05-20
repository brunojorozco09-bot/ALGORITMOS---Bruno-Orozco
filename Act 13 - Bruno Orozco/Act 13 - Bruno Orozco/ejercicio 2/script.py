"""
2. En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada
cuenta corriente se conoce: número de cuenta y saldo actual. El ingreso de datos debe
finalizar al ingresar un valor negativo en el número de cuenta. Se pide confeccionar un
programa que lea los datos de las cuentas corrientes e informe:
● a) De cada cuenta: número de cuenta y estado de la cuenta según su saldo,
sabiendo que:
○ Estado de la cuenta:
○ “Acreedor” si el saldo es >; 0.
○ “Deudor” si el saldo es <; 0.
○ “Nulo” si el saldo es = 0.
● b) La suma total de los saldos acreedores.
"""
suma=0

numCuenta=int(input("ingrese el numero de cuenta: "))

while numCuenta>0:

    if numCuenta<0:
        print(f"suma total de los saldos acreedores: {suma}")

    elif numCuenta>=0:
    
        saldo=int(input("ingrese el saldo de la cuenta: "))
        print(f"numero de cuenta: {numCuenta}")
        print(f"saldo ingresado: {saldo}")

        if saldo > 0:
            print("estado de la cuenta: acreedor.")
            suma=suma+saldo

        if saldo < 0:
            print("estado de la cuenta: deudor.")
    
        if saldo == 0:
            print("estado de la cuenta: nulo.")
    
        numCuenta=int(input("ingrese el numero de cuenta: "))

print(f"suma total de los saldos acreedores: {suma}")