"""
5. Se ingresa por teclado un valor entero, mostrar una leyenda que indique si
el número es positivo, negativo o nulo (es decir cero)
"""

num=int(input("ingrese un numero entero: "))

if num==0:
    print("su numero es nulo (0)")

elif num<0:
     print("su numero es negativo")

elif num>0:
     print("su numero es positivo")