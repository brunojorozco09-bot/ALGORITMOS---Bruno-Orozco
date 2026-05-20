"""
4. Cargar una lista con 5 elementos enteros. Ordenar de menor a mayor y
mostrarla por pantalla, luego ordenar de mayor a menor e imprimir
nuevamente.
"""

num=[]

for x in range(5):
    valor=int(input(f"ingrese un numero entero: "))
    num.append(valor)

for i in range (4):
    for x in range(4):
        if num[x]>num[x+1]:
            aux=num[x]
            num[x]=num[x+1]
            num[x+1]=aux

print("orden de los numeros de menor a mayor:")
print(num)

for i in range (4):
    for x in range(4):
        if num[x]<num[x+1]:
            aux=num[x]
            num[x]=num[x+1]
            num[x+1]=aux

print("orden de los numeros de mayor a menor:")
print(num)