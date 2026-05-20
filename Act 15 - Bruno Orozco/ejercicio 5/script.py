"""
5. Crear y cargar en un lista los nombres de 5 países y en otra lista paralela
la cantidad de habitantes del mismo. Ordenar alfabéticamente e imprimir
los resultados. Por último ordenar con respecto a la cantidad de habitantes
(de mayor a menor) e imprimir nuevamente.
"""

paises=[]
habitantes=[]
for x in range(5):
    valor=(input(f"ingresar el nombre del pais {x+1}: "))
    paises.append(valor)
    valor2=int(input(f"ingresar la cantidad de habitantes de {paises[x]}: "))
    habitantes.append(valor2)
    
paises.sort()
print("paises ordenados alfabeticamente: ")
print(paises)

for i in range (4):
    for x in range(4):
        if habitantes[x]<habitantes[x+1]:
            aux=habitantes[x]
            habitantes[x]=habitantes[x+1]
            habitantes[x+1]=aux

print("orden de los habitantes de mayor a menor:")
print(habitantes)

