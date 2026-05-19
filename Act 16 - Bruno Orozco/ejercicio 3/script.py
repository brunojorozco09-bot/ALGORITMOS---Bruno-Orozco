"""
3. Se registran los nombres de 5 atletas y sus tiempos (en segundos) en una
carrera de 100 metros. El programa debe cargar los datos en dos vectores
paralelos, calcular y mostrar el promedio de los tiempos, mostrar el nombre del
atleta con mejor y peor tiempo, y mostrar los nombres de quienes superaron el
promedio.
"""

nombres=[]
tiempos=[]
tB=0
tM=99999
suma=0

for x in range (5):

    valor1=str(input(f"ingrese el nombre del atleta {x}: "))
    nombres.append(valor1)
    valor2=int(input(f"ingrese el tiempo que obtuvo en la carrera {nombres[x]}: "))
    tiempos.append(valor2)

    if tiempos[x] < tM:
        tM= tiempos[x]
        nombre = nombres[x]

    if tiempos[x] > tB:
        tB= tiempos[x]
        nombree = nombres[x]

    
    suma= suma + tiempos[x]

promedio= suma / 5



for x in range (5):
    print(f"ATLETA: {nombres[x]}.   TIEMPO: {tiempos[x]}")


print (f"el atleta con mejor tiempo fue {nombre}, con un tiempo de {tM}")
print (f"el atleta con peor tiempo fue {nombree}, con un tiempo de {tB}")
print(f"el promedio de tiempos es {promedio}")

for x in range (5):

    if tiempos[x]< promedio:
        print(f"{nombres[x]} superó el promedio")
    