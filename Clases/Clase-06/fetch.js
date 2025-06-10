// Fetch: Consumiendo Datos Externos

// Api nativa para hacer solicitudes HTTP a servidores web.
// Ventajas --> Remplaza XMLHttpRequest, utiliza promesas para manejar respuestas.
// Uso --> Función global fetch() devuelve una promesa con la respuesta HTTP.

/*
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log(data));
*/

// Función async. Promesas
async function getProductos() {
  try {
    // Espera la respuesta de la API
    const respuesta = await fetch("https://fakestoreapi.com/products");

    // Convierte la respuesta en JSON
    const data = await respuesta.json();

    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

// llamamos a la función
getProductos();
