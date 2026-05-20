"""
1. Escribir un programa que solicite ingresar 10 notas de alumnos y nos
informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.
"""

for x in range(1, 11):
    nota=int(input(f"ingrese la nota del alumno numero {x}: "))

    if nota<7: 
        print(f"el alumno numero {x} tiene una nota menor a 7.")
    elif nota>=7: 
        print(f"el alumno numero {x} tiene una nota mayor o igual a 7.")