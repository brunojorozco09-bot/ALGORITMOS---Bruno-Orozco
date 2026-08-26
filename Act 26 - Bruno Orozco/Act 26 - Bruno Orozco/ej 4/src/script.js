/*
Ejercicio 04: Lista de Compras Dinámica

Confeccionar una página con un campo de texto y un botón “Agregar”.
Cada vez que se presione el botón, el producto ingresado en el campo debe añadirse
a una lista (&lt;ul&gt;).
Además:
 La lista debe permitir eliminar un producto haciendo clic sobre él.
 En consola debe mostrarse en todo momento la cantidad de productos
actuales en la lista.
*/

let inputProducto = document.getElementById("inputProducto");
let btnAgregarProducto = document.getElementById("btnAgregarProducto");
let listaCompras = document.getElementById("listaCompras");

function mostrarCantidadProductos() {
  console.log("Cantidad de productos en la lista:");
  console.log(listaCompras.children.length);
}

btnAgregarProducto.addEventListener("click", () => {
  let texto = inputProducto.value.trim();
  if (texto === "") return;

  let li = document.createElement("li");
  li.textContent = texto;
  listaCompras.appendChild(li);

  inputProducto.value = "";
  mostrarCantidadProductos();
});


listaCompras.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.remove();
    mostrarCantidadProductos();
  }
});
