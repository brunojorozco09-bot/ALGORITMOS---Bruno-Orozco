"""
5. Realizar un programa que lea los lados de n triángulos, e informar:
a. De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados
iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
b. Cantidad de triángulos de cada tipo.
"""

cantIS=0
cantES=0
cantEQ=0

num=int(input(f"ingrese la cantidad de triangulos que desea escribir: "))

for x in range(1, num+1):
    lado1=int(input("ingrese el primer lado: "))
    lado2=int(input("ingrese el segundo lado: "))
    lado3=int(input("ingrese el tercer lado: "))

    if lado1!=lado2 and lado2!=lado3 and lado1!=lado3:
        print("su triangulo es escaleno.")
        cantES=cantES+1

    elif lado1==lado2 and lado2!=lado3: 
        print("su triangulo es isosceles.")
        cantIS=cantIS+1
    
    elif lado1==lado2 and lado2==lado3: 
        print("su triangulo es equilatero.")
        cantEQ=cantEQ+1

print(f"cantidad de triangulos equilateros: {cantEQ}")
print(f"cantidad de triangulos escalenos: {cantES}")
print(f"cantidad de triangulos isosceles: {cantIS}")