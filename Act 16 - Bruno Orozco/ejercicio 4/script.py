"""
4. Se realiza una evaluación a 6 docentes por parte de sus alumnos. Se registran
sus nombres y puntajes promedio obtenidos (de 1 a 10).
Cargar sus datos en vectores paralelos, mostrar docente con calificación más
alta y más baja, ordenar los vectores de mayor a menor de acuerdo con la
calificación y mostrar en pantalla la cantidad de docentes que aprobaron y
desaprobaron (tomando como base que se aprueba con una nota mayor o
igual a 6)
"""

nombres=[]
nota=[]

notaM=0
notaB=9999

for x in range (6):

    valor1=str(input(f"ingrese el nombre del docente {x}: "))
    nombres.append(valor1)
    valor2=float(input(f"ingrese el tiempo que obtuvo en la carrera {nombres[x]}: "))
    nota.append(valor2)

    if nota[x] > notaM:
        notaM = nota[x]
        nombre=nombres[x]

    if nota[x] < notaB:
        notaB = nota[x]
        nombree=nombres[x]


for x in range (6):
    print(f"DOCENTE: {nombres[x]}.  NOTA: {nota[x]}")

for x in range (6):

    if nota[x]>=6:
        print(f"{nombres[x]} aprobó con {nota[x]}")

    else:
        print(f"{nombres[x]} no aprobó")

for x in range (6):
    for i in range (5):
        if nota[i]< nota[i+1]:
            aux= nota[i]
            nota[i]=nota[i+1]
            nota[i+1] = aux


print(f"el docente con menor nota fue {nombree}, con un total de {notaB}")
print(f"el docente con mejor nota fue {nombre}, con un total de {notaM}")
print(f"notas de mayor a menor: {nota}")


