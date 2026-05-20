/*
Ejercicio 2 – Inventario de Tienda
En un vector cargar los nombres de 5 productos y en un vector paralelo sus cantidades en
stock. Mostrar:
● Productos con stock menor a 10 unidades.
● Producto con mayor cantidad de stock.
● Suma total de todos los productos en stock.
*/

productos = [[], []];
function nombres(){
for(i=0; i<5; i++){
productos[0][i]=prompt("ingrese el nombre del producto: ")
productos[1][i]=parseInt(prompt("ingrese la cantidad en stock del producto " + productos[0][i]))
}

}


function menorA10() {
for (i=0; i<productos[0].length; i++) {
    if (productos[1][i] < 10) {
        console.log(productos[0][i] + " tiene stock menor a 10 unidades.");
    }
}
}

function mayorStock() {
    let mayor = productos[1][0];
    for (i=0; i<productos[0].length; i++) {
        if (productos[1][i] > mayor) {
            mayor = productos[1][i];
        }
    }
    console.log("El producto con mayor cantidad de stock tiene " + mayor + " unidades.");
}

function sumaStock() {
    let suma = 0;
    for (i=0; i<productos[0].length; i++) {
        suma = suma + productos[1][i];
    }
    console.log("La suma total de todos los productos en stock es " + suma);
}

nombres();
menorA10();
mayorStock();
sumaStock();