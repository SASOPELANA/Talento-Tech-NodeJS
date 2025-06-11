import { argv } from "node:process";

const method = argv[2];
const recurso = argv[3];
const args = argv.slice(4);

const datos = "https://fakestoreapi.com/products";

async function obtenerProductos(recurso, args) {
  if (recurso === "products" && !args[0]) {
    // Obtenemos todos los productos
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();
    console.log(data);
  } else if (recurso.startsWith("products/")) {
    // Obtenemos un producto específico por ID
    const productId = recurso.split("/")[1];
    const res = await fetch(`${datos}/${productId}`);
    const data = await res.json();
    console.log(data);
  } else {
    console.log("Comando GET no reconocido o argumentos incorrectos.");
  }
}

async function metodos() {
  try {
    if (method === "GET") {
      await obtenerProductos(recurso, args);
    } else {
      console.log(
        "Comando no reconocido, npm run start GET products o npm run start GET products/id",
      );
    }
  } catch (error) {
    console.error("Error ID no existe en la API:", error.message);
  }
}

metodos();
