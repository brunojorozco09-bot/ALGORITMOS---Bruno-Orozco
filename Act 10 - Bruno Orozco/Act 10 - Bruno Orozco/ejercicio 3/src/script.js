/*
Ejercicio 3 – Ventas por Vendedor y Mes
Cargar en un vector los nombres de 4 vendedores y en una matriz las ventas realizadas
por cada vendedor en 3 meses. Mostrar:
● Total vendido por cada vendedor.
● Vendedor con mayor venta acumulada.
● Promedio general de ventas por vendedor.
*/
let mayor
let vendedorMayor
let vendedores =[];
let matriz = [ [], [],  [],  []  ];

function ingresarValores() {
  for (let i = 0; i < 4; i++) {
    vendedores[i] = prompt("ingrese el nombre del " + (i + 1) + "° vendedor");
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      matriz[i][j] = parseInt(prompt("ingrese las ventas en el "+(j+1)+"° mes del vendedor " + vendedores[i]));
    }
  }
}
function totalVendido() {
for(i=0; i<vendedores.length; i++){
    let total = 0;
    for(j=0; j<matriz[i].length; j++){
        total += matriz[i][j];
}
    console.log("Total vendido por " + vendedores[i] + ": " + total);
}
}
function mayorVenta() {
    for(i=0; i<vendedores.length; i++){
        let total = 0;  
        for(j=0; j<matriz[i].length; j++){
            total += matriz[i][j];
            }       
             if(i == 0){
                mayor= total;
                vendedorMayor = vendedores[i];
            }
            else if(total > mayor){
                mayor = total;
                vendedorMayor = vendedores[i];
            }
}
console.log("Vendedor con mayor venta acumulada: " + vendedorMayor + " con un total de " + mayor);
}

function promedioVentas() {
    for(i=0; i<vendedores.length; i++){
        let total = 0;
        for(j=0; j<matriz[i].length; j++){
            total += matriz[i][j];
    }        let promedio = total / matriz[i].length;
            console.log("Promedio de ventas del " + vendedores[i] + ": " + promedio);
}
}

ingresarValores();
totalVendido();
mayorVenta();
promedioVentas();