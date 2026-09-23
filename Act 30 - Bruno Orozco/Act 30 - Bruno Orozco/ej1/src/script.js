/*
Ejercicio práctico #1:
Aplicar el consumo de API Fetch en tu proyecto personal
Enunciado: En este ejercicio, vas a integrar el consumo de una API REST utilizando
fetch() en tu proyecto personal de e-commerce o cualquier otro proyecto que estés
desarrollando. Los pasos a seguir son:
1. Elige una API pública (como Fake Store API) que te proporcione datos de
productos, usuarios y usuarias o cualquier otro recurso que quieras mostrar en
tu proyecto.
2. Usa fetch() para hacer una solicitud a la API y obtener los datos.
3. Muestra los datos obtenidos en tu proyecto, ya sea en forma de lista de
productos, usuarias o usuarios o lo que elijas.
4. Asegúrate de manejar los posibles errores utilizando .catch() y mostrá un
mensaje si algo falla.
5. Opcional: Integra los datos obtenidos con alguna funcionalidad de tu proyecto,
como un carrito de compras o una lista de productos favoritos.
*/


const productsGrid = document.getElementById('products-grid');
const statusMessage = document.getElementById('status-message');

const API_URL = 'https://fakestoreapi.com/products';

fetch(API_URL)
  .then(response => {

    if (!response.ok) {
      throw new Error(`Error en la red: ${response.status}`);
    }
    return response.json(); 
  })
  .then(products => {

    statusMessage.style.display = 'none';


    displayProducts(products);
  })
  .catch(error => {

    console.error('Error al obtener los datos:', error);
    statusMessage.textContent = 'Ocurrió un error al cargar los productos. Por favor, reintenta más tarde.';
    statusMessage.classList.add('error');
  });


function displayProducts(products) {
  products.forEach(product => {

    const card = document.createElement('article');
    card.classList.add('product-card');


    card.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.title}">
      <div>
        <h2 class="product-title">${product.title}</h2>
      </div>
      <p class="product-price">$${product.price.toFixed(2)}</p>
    `;


    productsGrid.appendChild(card);
  });
}