"""
5-
Almacenar los nombres de 5 productos y sus precios. Utilizar una lista y cada
elemento una tupla con el nombre y el precio.
Desarrollar las funciones:
1) Cargar por teclado.

2) Listar los productos y precios.
3) Imprimir los productos con precios comprendidos entre 10 y 15.
"""

def cargar(Lista):
    for x in range (5):
        nom=str(input("ingrese el nombre del producto: "))
        num=int(input("ingrese el precio del producto: "))
        Lista.append((nom, num))
    
    print("LISTA DE PRODUCTOS Y SUS PRECIOS: ")
    for x in range(5):
        print(Lista[x])


def precios(Lista):
    print("PRECIOS COMPRENDIDOS ENTRE 10 Y 15: ")
    for x in range (5):
        if Lista[x][1] >= 10 and Lista[x][1] <= 15:
            print(Lista[x])


lista=[]

cargar(lista)
precios(lista)
