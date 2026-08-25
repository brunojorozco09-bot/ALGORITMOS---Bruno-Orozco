"""
1-
Confeccionar un programa que permita registrar las temperaturas máximas de las últimas
6 horas en una lista.
Desarrollar las siguientes funciones:
1. Carga: Solicitar al operador el ingreso por teclado de las 6 temperaturas y
almacenarlas en una lista.
2. Procesar Extremos: Recibir la lista como parámetro y retornar una tupla que
contenga en su primer componente el valor máximo y en el segundo el valor
mínimo.
3. Bloque Principal: Desempaquetar la tupla devuelta por la función anterior en dos
variables individuales (máxima y mínima) y mostrarlas en pantalla con un mensaje
descriptivo.
"""

def carga():
    temperaturas=[]
    for x in range(6):
        valor1=int(input(f"ingrese la temperatura maxima de la hora {x+1}: "))
        temperaturas.append(valor1)

    return temperaturas

def Procesar_Extremos(temperaturas):
    tempM=-999
    tempm=999
    
    for x in range(6):
        if temperaturas[x] > tempM:
            tempM=temperaturas[x]

        if temperaturas [x] < tempm:
            tempm=temperaturas[x]

    tupla=(tempM, tempm)
    print(tupla)

    return tupla



def Bloque_Principal(tupla):
    valorMayor=tupla[0]
    valorMenor=tupla[1]

    print(f"VALOR MENOR: {valorMenor}")
    print(f"VALOR MAYOR: {valorMayor}")



temperaturas=carga()
tupla=Procesar_Extremos(temperaturas)
Bloque_Principal(tupla)