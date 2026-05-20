"""
4. Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a. La cantidad de valores ingresados negativos.
b. La cantidad de valores ingresados positivos.
c. La cantidad de múltiplos de 15.
d. El valor acumulado de los números ingresados que son pares.
"""
suma=0

for x in range(1,11):
    num=int(input(f"ingrese el valor numero {x}: "))
    print(f"numero ingresado: {num}")

    if num<0:
         print("el numero ingresado es negativo.")
    

    elif num>0:
         print("el numero ingresado es positivo.")

    if num%15 == 0:
         
         print("su numero es multiplo de 15.")
    
    if num%2==0:
         suma=suma+num
         
print(f"suma total de los valores pares: {suma}")