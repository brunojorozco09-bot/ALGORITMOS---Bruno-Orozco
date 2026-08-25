"""
2-
Para un sistema de radares de tránsito, se necesita registrar la ubicación geográfica de 4
cámaras de control.
 Almacenar en una lista las coordenadas de las 4 cámaras. Cada elemento de la
lista debe ser una tupla de dos flotantes (latitud, longitud) ingresados por teclado.
Desarrollar las siguientes funciones:
1. Cargar coordenadas: Solicitar la latitud y la longitud de cada una de las 4
cámaras para armar las tuplas y agregarlas a la lista.
2. Listar posiciones: Recibir la lista e imprimir las coordenadas de todas las
cámaras. Importante: Realizar el recorrido utilizando un bucle for que
desempaquete la tupla directamente en las variables lat y lon en cada vuelta (sin
utilizar índices numéricos como [0] o [1]).
3. Filtrar hemisferio: Contar e informar cuántas de las cámaras se encuentran
ubicadas en el hemisferio norte (latitud mayor a cero).
"""

def carga():
    lista=[]
    
    for x in range(4):
        latitud=int(input(f"ingrese la latitud de la camara n° {x+1}: "))
        longitud=int(input(f"ingrese la longitud de la camara n° {x+1}: "))

        lista.append((latitud, longitud))

    return lista

def listar(lista):
    for x in range(4):
        for y in range(1):
            print(f"la camara {x+1} esta ubicada en latitud {lista[x][y]} y longitud {lista[x][y+1]}")


def filtro(lista):
    for x in range(4):
        if lista[x][0] > 0:
            print(f"la camara {x+1} se encuentra en el hemisferio norte.")



lista=carga()
listar(lista)
filtro(lista)