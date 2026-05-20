"""
2. Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la
altura promedio de las personas.
"""

n =int(input("ingrese la cantidad de alturas que va a ingresar: "))
promedio=0


for x in range(1, n+1):
    alturas=int(input(f"ingrese la alturas de la persona numero {x}: "))

    promedio += alturas


promedio=promedio/n
print(f"promedio de alturas: {promedio}")