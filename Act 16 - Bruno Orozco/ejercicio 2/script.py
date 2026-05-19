"""
2. Una empresa registra los nombres de sus 5 vendedores y el total de ventas
realizadas por cada uno en un mes. Cargar los nombres y ventas en dos
vectores paralelos, ordenar los datos de mayor a menor según las ventas,
imprimir la lista ordenada con nombre y monto de la venta, e informar quien fue
el que menos vendió de los 5 empleados.
"""

nombres=[]
ventas=[]
notaB=99999


for x in range (5):

    valor1=str(input(f"ingrese el nombre del vendedor {x}: "))
    nombres.append(valor1)
    valor2=int(input(f"ingrese el total de ventas del mes de {nombres[x]}: "))
    ventas.append(valor2)

    if ventas[x] < notaB:
        notaB= ventas[x]
        nomB = nombres[x]



for x in range (5):
    print(f"NOMBRE: {nombres[x]}.  VENTAS TOTALES: {ventas[x]}")


for x in range (5):
    for i in range (4):
        if ventas[i]< ventas[i+1]:
            aux= ventas[i]
            ventas[i]=ventas[i+1]
            ventas[i+1] = aux

print(f"ventas acumuladas de mayor a menor: {ventas}")
print(f"el vendedor que menos vendió fue {nomB}, con un total de {notaB}")

