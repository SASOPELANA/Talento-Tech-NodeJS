import { argv } from "node:process";

const comando = argv[2]?.toUpperCase(); // Convertimos el método a mayúsculas para estandarizar
const recurso = argv[3];
const args = argv.slice(4);

const datos = "https://fakestoreapi.com/products";

/// Método GET
async function obtenerProductos(recurso, args) {
  // variables para determinar el tipo de solicitud
  const listaCompleta = recurso === "products" && !args[0];
  const productoEspecifico = recurso.startsWith("products/");

  // Obtenemos todos los productos de la API
  if (listaCompleta) {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  // Obtenemos una lista de productos por ID
  if (productoEspecifico) {
    const productId = recurso.split("/")[1];
    const res = await fetch(`${datos}/${productId}`);
    const data = await res.json();
    console.log(data);
  }

  // Si no se reconoce el comando o los argumentos, mostramos un mensaje de error
  if (!listaCompleta && !productoEspecifico) {
    console.log("Comando GET no reconocido o argumentos incorrectos.");
  }
}

// Método POST

async function metodos() {
  try {
    if (comando === "GET") {
      await obtenerProductos(recurso, args);
    } else {
      console.log(
        "Comando no reconocido, npm run start GET products o npm run start GET products/id",
      );
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

metodos();
