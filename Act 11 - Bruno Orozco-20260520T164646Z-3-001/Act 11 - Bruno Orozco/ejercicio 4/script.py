# 4. Se ingresa por teclado un número positivo de uno o dos dígitos (1..99)
# mostrar un mensaje indicando si el número tiene uno o dos dígitos.
# (Tener en cuenta que condición debe cumplirse para tener dos dígitos un
# número entero)

num=int(input("ingrese un numero: "))

if num>9 and num<=99:
    print("su numero es de dos digitos.")

elif num<=9:
    print("su numero es de un digito")