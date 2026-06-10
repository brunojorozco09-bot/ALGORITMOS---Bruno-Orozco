"""
3. Confeccionar un programa que permita:
1) Cargar una lista de 10 elementos enteros.
2) Generar dos listas a partir de la primera. En una guardar los valores
positivos y en otra los negativos.
3) Imprimir las dos listas generadas.
"""

def ejercicio (list, lista2, lista3):
    for x in range (10):
        valor1=int(input("ingrese un numero entero: "))
        list.append(valor1)

    for x in range (10):
        if list[x] > 0:
            lista2.append(list[x])

        elif list[x] < 0:
            lista3.append(list[x])

    print(f"lista original: {list}")
    print(f"lista de numeros positivos: {lista2}")
    print(f"lista de numeros negativos: {lista3}")


numeros=[]
listaPos=[]
listaNeg=[]
ejercicio(numeros, listaPos, listaNeg)
