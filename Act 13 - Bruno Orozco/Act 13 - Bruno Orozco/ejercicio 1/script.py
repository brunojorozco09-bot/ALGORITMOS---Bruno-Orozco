"""
1. En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500,
realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos
empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el
programa deberá informar el importe que gasta la empresa en sueldos al personal.
"""

num=int(input("ingrese la cantidad de empleados: "))
suma=0

for x in range(1, num+1):
    sueldos=int(input(f"ingrese el sueldo del empleado numerp {x}: "))

    if sueldos<=300 and sueldos>=100:
        suma= suma + sueldos
        print(f"el sueldo del empleado numero {x} está entre $100 y $300 ")

    elif sueldos>300:
        suma= suma + sueldos
        print(f"el sueldo del empleado numero {x} es mayor a $300 ")

print(f"la empresa gasta en total ${suma} en sueldos.")