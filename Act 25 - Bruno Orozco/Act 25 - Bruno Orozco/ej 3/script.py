"""
3-
Un equipo de Fórmula 1 registra los nombres de sus 4 pilotos junto con los tiempos (en
segundos) obtenidos en sus últimas 3 vueltas de clasificación.
 La estructura de datos debe ser una lista general. Cada elemento de la lista será
una sublista que contenga en el primer componente el nombre del piloto (cadena
de caracteres) y en el segundo componente una tupla con sus 3 tiempos
(flotantes).
 Sugerencia de estructura interna si se cargara por asignación:
pilotos = [ [&quot;Franco&quot;, (78.5, 77.2, 79.1)], [&quot;Lewis&quot;, (77.9, 78.1, 77.4)], ... ]
Desarrollar las siguientes funciones:
1. Cargar pilotos: Solicitar por teclado el nombre de cada uno de los 4 pilotos y sus
3 mejores tiempos para estructurar la lista y las tuplas correspondientes.
2. Calcular Promedios: Recorrer la estructura de datos, calcular el tiempo promedio
de cada piloto en sus 3 vueltas e imprimir su nombre junto a dicho promedio.
3. Mejor Vuelta: Recorrer la estructura para buscar y mostrar la vuelta más rápida de
toda la clasificación (el tiempo individual más bajo dentro de cualquier tupla),
detallando a qué piloto le pertenece.
"""

def carga():
 
    lista=[]
    for x in range(4):
        piloto=input("ingrese el nombre del piloto: ")
        tiempo1=float(input(f"ingrese el tiempo de la primer vuelta de {piloto}: "))
        tiempo2=float(input(f"ingrese el tiempo de la segunda vuelta de {piloto}: "))
        tiempo3=float(input(f"ingrese el tiempo de la tercer vuelta de {piloto}: "))

        lista.append((piloto, tiempo1, tiempo2, tiempo3))

    return lista

def promedios(lista):
    prom=0
    for x in range(4):
        for y in range(3):
                prom= prom + lista[x][y+1] / 3
        print(f"promedio de {lista[x][0]}: {prom}")
        prom=0


def mejorVuelta(lista):
    mv=999
   
    for x in range(4):
          for y in range(3):
               if lista[x][y+1] < mv:
                    mv=lista[x][y+1]
                    pil= lista[x][0]

    print(f"LA MEJOR VUELTA FUE DE {pil}, con un tiempo de {mv}")



lista=carga()
promedios(lista)
mejorVuelta(lista)