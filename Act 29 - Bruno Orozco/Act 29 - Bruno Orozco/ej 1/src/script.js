/*
Ejercicio 1: Guardar Preferencias de Usuario
Enunciado: Crear una función que guarde y recupere las preferencias de un usuario,
como su nombre y el color de fondo preferido, utilizando LocalStorage.
1. La función debe permitir al usuario ingresar su nombre y seleccionar su color
de fondo preferido desde una lista de opciones.
2. Los datos ingresados deben almacenarse en LocalStorage.
3. Cada vez que la página se recargue, las preferencias deben recuperarse de
LocalStorage y aplicarse automáticamente (mostrar el nombre del usuario y
cambiar el color de fondo).
*/

function guardarPreferencias() {

let nom = document.getElementById('nombre').value;
  let col = document.getElementById('color').value;

  localStorage.setItem('nombreUsuario', nom);
  localStorage.setItem('colorFondo', col);

  aplicarCambios(nom, col);
  
}

function cargarPreferencias() {

  let nomGuardado = localStorage.getItem('nombreUsuario');
  let colGuardado = localStorage.getItem('colorFondo');

  if (nomGuardado != null) {
    document.getElementById('nombre').value = nomGuardado;
  }

  if (colGuardado != null) {
    document.getElementById('color').value = colGuardado;
  }

  aplicarCambios(nomGuardado, colGuardado);
}

function aplicarCambios(nom, col) {
  if (nom) {
    document.getElementById('saludo').innerHTML = nom;
  }
  if (col) {
    document.body.style.backgroundColor = col;
  }
}