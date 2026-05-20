"""
3. Realizar un programa que permita cargar dos listas de 15 valores cada una.
Informar con un mensaje cuál de las dos listas tiene un valor acumulado mayor
(mensajes "Lista 1 mayor" "Lista 2 mayor" "Listas iguales") Tener en cuenta que
puede haber dos o más estructuras repetitivas en un algoritmo.
"""
suma1=0
suma2=0
for x in range(1, 16):

    lista1=int(input(f"ingrese el valor numero {x} de 15 de la lista 1: "))
    suma1= suma1 + lista1

for x in range(1,16):
    lista2=int(input(f"ingrese el valor numero {x} de 15 de la lista 2: "))
    suma2= suma2 + lista2

if suma1>suma2:
    print("la lista 1 es mayor que la lista 2")

elif suma1<suma2:
    print("la lista 2 es mayor que la lista 1")

else:
    print("la lista 1 es igual que la lista 2")