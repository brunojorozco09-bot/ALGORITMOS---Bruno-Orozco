"""
3. Solicitar por teclado la cantidad de empleados que tiene la empresa. Crear
y cargar una lista con todos los sueldos de dichos empleados. Imprimir la
lista de sueldos ordenamos de menor a mayor.
"""

n=int(input("ingrese la cantidad de empleados que tiene la empresa: "))

sueldos=[]

for x in range(n):
    valor=int(input(f"ingrese el sueldo del empleado {x+1}: "))
    sueldos.append(valor)

for i in range (n-1):
    for x in range(n-1):
        if sueldos[x]>sueldos[x+1]:
            aux=sueldos[x]
            sueldos[x]=sueldos[x+1]
            sueldos[x+1]=aux

print("sueldos de menor a mayor:")
print(sueldos)