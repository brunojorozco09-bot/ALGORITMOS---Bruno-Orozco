#2. Calcular el sueldo mensual de un operario conociendo la cantidad de horas
# trabajadas y el valor por hora.

horas= int(input("ingrese la cantidad de horas trabajadas del operario: "))
valor= int(input("ingrese el valor de cada hora trabajada: "))

sueldo= (horas*valor) * 30
sueldo=int(sueldo)

print(f"el sueldo del operario es de: {sueldo}")