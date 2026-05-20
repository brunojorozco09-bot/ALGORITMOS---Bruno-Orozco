"""
1. En un curso de 4 alumnos se registraron las notas de sus exámenes y se
deben procesar de acuerdo a lo siguiente:
a. Ingresar nombre y nota de cada alumno (almacenar los datos en
dos listas paralelas)
b. Realizar un listado que muestre los nombres, notas y condición del
alumno. En la condición, colocar "Muy Bueno" si la nota es mayor o
igual a 8, "Bueno" si la nota está entre 4 y 7, y colocar "Insuficiente"
si la nota es inferior a 4.
c. Imprimir cuántos alumnos tienen la leyenda “Muy Bueno”.
"""
valor1=0
valor2=0
cont=0
alumnos=[]
notas=[]

for x in range (4):
    valor1=(input("ingresar el nombre del alumno: "))
    alumnos.append(valor1)
    valor2=int(input(f"ingresar la nota de {alumnos[x]}: "))
    notas.append(valor2)

for x in range(4):
    
    if notas[x]>=8:
            print(f"el alumno {alumnos[x]} tiene {notas[x]}. Condicion: Muy Bueno")
            cont=cont+1

    elif notas[x]>=4 and notas[x]<=7:
            print(f"el alumno {alumnos[x]} tiene {notas[x]}. Condicion: Bueno")

    elif notas[x]<4:
            print(f"el alumno {alumnos[x]} tiene {notas[x]}. Condicion: Insuficiente")

print(f"alumnos con un Muy Bueno: {cont}")