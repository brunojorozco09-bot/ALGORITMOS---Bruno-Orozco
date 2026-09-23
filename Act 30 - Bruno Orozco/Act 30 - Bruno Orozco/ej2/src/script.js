/*
Ejercicio práctico #2:
Crear un carrito de compras dinámico con productos de una API
Enunciado: Vas a crear un carrito de compras dinámico que permite agregar
productos al carrito utilizando datos obtenidos de una API externa. Los pasos
específicos son:
1. Utilizá fetch() para obtener una lista de productos desde una API (puede ser la
misma API de productos del Ejercicio 1).
2. Mostrá los productos en la página en forma de tarjetas o lista.
3. Agregá un botón &quot;Añadir al carrito&quot; para cada producto. Al hacer clic en el
botón, el producto debe añadirse al carrito.
4. Usá LocalStorage para almacenar los productos que se agreguen al carrito,
de manera que si recarga la página, los productos sigan allí.
5. Mostrá la cantidad de productos que hay en el carrito en todo momento,
actualizándose cada vez que se añada un nuevo producto.
*/


const API_URL = 'https://fakestoreapi.com/products';

const productsContainer = document.getElementById('products-container');
const cartCounter = document.getElementById('cart-counter');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {

  localStorage.setItem('cart', JSON.stringify(cart));
  
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartCounter.textContent = totalItems;
}

async function fetchProducts() {

  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    displayProducts(products);
  } 
  catch (error) {
    console.error('Error al obtener los productos:', error);
    productsContainer.innerHTML = '<p>Ocurrió un error al cargar los productos.</p>';
  }
}


function displayProducts(products) {
  productsContainer.innerHTML = ''; 

  products.forEach(product => {

    const card = document.createElement('div');
    card.classList.add('product-card');


    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button class="add-btn">Añadir al carrito</button>
    `;

    const addButton = card.querySelector('.add-btn');
    addButton.addEventListener('click', () => addToCart(product));

    productsContainer.appendChild(card);
  });
}


function addToCart(product) {

  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
  updateCart(); 
});