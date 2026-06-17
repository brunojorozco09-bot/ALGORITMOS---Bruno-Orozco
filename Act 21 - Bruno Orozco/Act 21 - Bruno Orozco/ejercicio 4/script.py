"""
4-
Se tiene que cargar los votos obtenidos por tres candidatos a una elección.
En una lista cargar en el primer componente el nombre del candidato y en la
segunda componente cargar una lista con componentes de tipo tupla con el
nombre de la provincia y la cantidad de votos obtenidos en dicha provincia.
Se deben cargar los datos por teclado, pero si se cargaran por asignación tendría
una estructura similar a esta:
candidatos=[ ("juan",[("cordoba",100),("buenos aires",200)]) , ("ana",
[("cordoba",55)]) , ("luis", [("buenos aires",20)]) ]
1) Función para cargar todos los candidatos, sus nombres y las provincias con los
votos obtenidos.
2) Imprimir el nombre del candidato y la cantidad total de votos obtenidos en todas
las provincias.
"""

def cargarCandidatos():
    candidatos = []
    for numeroCandidato in range(3):
        nombreCandidato = input(f"Ingrese el nombre del candidato: ")
        provincias = []
        cantidadProvincias = int(input(" ingrese cuantas provincias desea cargar: "))
        for numeroProvincia in range(cantidadProvincias):
            nombreProvincia = input(f"Ingrese el nombre de la provincia: ")
            votos = int(input("Ingrese la cantidad de votos: "))
            provincias.append((nombreProvincia, votos))
        candidatos.append([nombreCandidato, provincias])
    return candidatos

def totalVotos(candidatos):
    print("TOTAL DE VOTOS POR CANDIDATO:")
    for candidato in candidatos:
        nombreCandidato = candidato[0]
        provincias = candidato[1]
        total = 0
        for provincia in provincias:
            total = total + provincia[1]
        print(nombreCandidato, "tuvo", total, "votos")

candidatos = cargarCandidatos()
totalVotos(candidatos)



