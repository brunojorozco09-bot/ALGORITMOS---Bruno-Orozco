"""
1. Se desea desarrollar un programa que permita registrar los nombres y las
calificaciones de 6 estudiantes. Luego de cargar los datos, se debe mostrar el
nombre del estudiante con la nota más alta, junto con su nota. Al igual que el
estudiante con la nota más baja. Informar si hay estudiantes con la misma nota
máxima o mínima.
"""

nombres=[]
calificaciones=[]
notaB=999999
notaA=0
for x in range (6):

    valor1=str(input(f"ingrese el nombre del estudiante {x}: "))
    nombres.append(valor1)
    valor2=int(input(f"ingrese la calificacion de {nombres[x]}: "))
    calificaciones.append(valor2)


    if calificaciones[x] > notaA:
        notaA= calificaciones[x]
        nombreA = nombres[x]

    if calificaciones[x] < notaB:
        notaB = calificaciones[x]
        nombreB = nombres[x]

    
for x in range (6):
    print(f"ALUMNO: {nombres[x]}.  CALIFICACION: {calificaciones[x]}")

print (f"el alumno con la nota mas alta es {nombreA}, con una calificacion de {notaA}")
print (f"el alumno con la nota mas baja es {nombreB}, con una calificacion de {notaB}")

