"""
2.A- Una empresa tiene dos turnos (mañana y tarde) en los que trabajan 8
empleados (4 por la mañana y 4 por la tarde) Confeccionar un programa
que permita almacenar los sueldos de los empleados agrupados en dos
listas.
2.B- Imprimir las dos listas de sueldos.
"""
valor1=0
valor2=0

sueldosM=[]
sueldosT=[]

for x in range(0,4):
    valor1=int(input(f"ingresar el sueldo del empleado {x} del turno tarde: "))
    valor2=int(input(f"ingresar el sueldo del empleado {x} del turno mañana: "))
    sueldosT.append(valor1)
    sueldosM.append(valor2)

    

for x in range(0,4): 
    print(f"sueldo del empleado {x} del turno mañana: ")
    print(sueldosM[x])

for x in range(0, 4): 
    print(f"sueldo del empleado {x} del turno tarde: ")
    print(sueldosT[x])