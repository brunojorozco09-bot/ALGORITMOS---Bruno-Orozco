#3. Realizar un programa que solicite la carga por teclado de dos números, si el
# primero es mayor al segundo informar su suma y diferencia, en caso
# contrario informar el producto y la división del primero respecto al segundo.

num1=int(input("ingrese el primer numero: "))
num2=int(input("ingrese el segundo numero: "))

suma=num1+num2
suma=int(suma)

diferencia=num1-num2
diferencia=int(diferencia)

producto=num1 * num2
producto=float(producto)

division=num1/num2
division=float(division)

if num1>num2:
    print(f"suma de ambos numeros: {suma}")
    print(f"diferencia entre ambos: {diferencia}")
else:
    print(f"el producto de ambos numeros es: {producto}")
    print(f"la divison de ambos numeros es: {division}")

