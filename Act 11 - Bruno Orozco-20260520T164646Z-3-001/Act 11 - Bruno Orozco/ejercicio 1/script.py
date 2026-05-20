#1. Realizar un programa que lea cuatro valores numéricos e informar su suma
#y promedio.

num1=int(input("ingrese el primer numero "))
num2=int(input("ingrese el segundo numero "))
num3=int(input("ingrese el tercer numero "))
num4=int(input("ingrese el cuarto numero "))


suma=num1+num2+num3+num4
suma=int(suma)

promedio=suma/4
promedio=float(promedio)

print(f"la suma total es {suma}")
print(f"el promedio de los numeros es {promedio} ")