"""
2. Realizar un programa que pida la carga de dos listas numéricas enteras
de 4 elementos cada una. Generar una tercera lista que surja de la suma
de los elementos de la misma posición de cada lista. Mostrar esta tercera
lista.
"""

lista1=[]
lista2=[]
lista3=[]

for x in range (4):
    valor1=int(input("ingrese un numero entero para la primer lista: "))
    valor2=int(input("ingrese un numero entero para la segunda lista: "))
    lista1.append(valor1)
    lista2.append(valor2)

for x in range (4):
    lista3.append(lista1[x]+lista2[x])

print(f"lista 3: {lista3}")