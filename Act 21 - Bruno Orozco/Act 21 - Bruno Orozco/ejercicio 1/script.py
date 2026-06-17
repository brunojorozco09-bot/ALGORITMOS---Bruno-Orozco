"""
1-
Confeccionar un programa con las siguientes funciones:
1)Cargar una lista de 5 enteros.
2)Retornar el mayor y menor valor de la lista mediante una tupla.
Desempaquetar la tupla en el bloque principal y mostrar el mayor y menor.
"""

def cargar(Lista):
    for x in range (5):
        nom=int(input("ingrese un numero entero: "))
        Lista.append(nom)
    return Lista

def numeroMayorYMenor(Lista):
    elementoM=0
    elementom=99999
    for x in range (5):
        if elementoM < Lista[x]:
            elementoM = Lista[x]

        if elementom > Lista[x]:
            elementom = Lista[x]

    numeros= elementom, elementoM
    return numeros


lista=[]

print(cargar(lista))
lista=numeroMayorYMenor(lista)
print(f"numero mas pequeño y mas grande:{lista}")