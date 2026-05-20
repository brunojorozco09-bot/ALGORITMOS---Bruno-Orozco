"""
4. Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos
en el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y
cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de
puntos a procesar.
"""

n=int(input("ingrese cuantos puntos desea poner: "))

for x in range(1, n+1):
    X=int(input("ingrese la ubicacion de X: "))
    Y=int(input("ingrese la ubicacion de Y: "))

    if X>0 and Y>0:
        print("el punto se encuentra en el primer cuadrante.")

    elif X<0 and Y>0:
        print("el punto se encuentra en el segundo cuadrante.")

    elif X<0 and Y<0:
        print("el punto se encuentra en el tercer cuadrante.")

    elif X>0 and Y<0:
        print("el punto se encuentra en el cuarto cuadrante.")