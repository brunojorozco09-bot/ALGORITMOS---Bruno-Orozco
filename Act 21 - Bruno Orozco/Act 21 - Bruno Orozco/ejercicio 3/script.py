"""
3-

Almacenar en una lista 5 empleados, cada elemento de la lista es una sub lista
con el nombre del empleado junto a sus últimos tres sueldos (estos tres valores en
una tupla)
El programa debe tener las siguientes funciones:
1)Carga de los nombres de empleados y sus últimos tres sueldos.
2)Imprimir el monto total cobrado por cada empleado.
3)Imprimir los nombres de empleados que tuvieron un ingreso trimestral mayor a
10000 en los últimos tres meses.
Tener en cuenta que la estructura de datos si se carga por asignación debería ser
similar a:
empleados = [["juan",(2000,3000,4233)] , ["ana",(3444,1000,5333)] ]
"""

def imprimir(Empleados):
    for x in range (len(Empleados)):
        print(f"EMPLEADO: {Empleados[x][0]}")
        print("ultimos 3 sueldos:")
        for i in range(3):
            print(Empleados[x][1][i])
        print("----------------------------")


def monto_total(Empleados):
    suma=0
    nombres=[]
    for x in range (len(Empleados)):
        for i in range (3):
            suma= suma + Empleados[x][1][i]
        print(f"suma total del empleado {x}: {suma}")
        if suma > 10000:
            nombres.append(Empleados[x][0])
        suma=0
    print(f"empleado/s con un ingreso trimestral mayor a 10000: {nombres}")
    
 



empleados = [["juan",(2000,3000,4233)] , ["ana",(3444,1000,5333)], ["cristian",(3000,1000,6700)]]

imprimir(empleados)
monto_total(empleados)