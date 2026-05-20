"""
1. Definir una lista que almacene por asignación los nombres de 5 personas.
Contar cuántos de esos nombres tienen 5 o más caracteres y mostrarlo.
"""

lista = ["cristian", "bruno", "vic", "max", "mayta"]
cont=0

for i in range(5):
    if len(lista[i]) >= 5:
        cont= cont +1

print(f"nombres con 5 o mas caracteres: {cont}")