"""
3. Confeccionar una función que calcule la superficie de un rectángulo y la
retorne, la función recibe como parámetros los valores de dos de sus lados:
def retornar_superficie(lado1,lado2):
En el bloque principal del programa cargar los lados de dos rectángulos y
luego mostrar cuál de los dos tiene una superficie mayor.
"""


def calculo():
    base=int(input("ingrese la base del rectangulo: "))
    altura=int(input("ingrese la altura del rectangulo: "))
    resultado = base * altura
    return resultado

def respuesta():

    resultado= calculo()
    print(f"la superficie del rectangulo es de {resultado}")


respuesta()