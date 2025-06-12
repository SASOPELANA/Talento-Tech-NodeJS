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

  try {
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
  } catch (e) {
    console.error("Error al obtener los productos:", e.message);
  }
}

// Método POST
async function agregarProductos(recurso, args) {
  if (recurso === "products") {
    // POST nuevo producto
    const [title, price, category] = args;
    if (!title || !price || !category) {
      console.log(
        "Faltan argumentos para crear el producto. Nombre, precio y categoria del producto son datos obligatorios.",
      );
      return;
    }

    try {
      const body = {
        title,
        price: parseFloat(price),
        description: "Producto creado desde la terminal",
        category,
        image: "https://i.pravatar.cc",
      };
      const res = await fetch(datos, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.error("Error al agregar el producto:", e.message);
    }
  } else {
    console.log("Comando POST no reconocido o argumentos incorrectos.");
  }
}

//TODO: Método DELETE
async function eliminarProducto(recurso, args) {
  if (recurso.startsWith("products/")) {
    const productId = recurso.split("/")[1];
    try {
      const res = await fetch(`${datos}/${productId}`, { method: "DELETE" });
      const data = await res.json();

      if (data === null) {
        console.log(`Producto con ID ${productId} no existe en la API.`);
      } else {
        console.log(`Producto con ID ${productId} eliminado correctamente.\n`);
        console.log(data);
      }
    } catch (e) {
      console.error("Error al eliminar el producto:", e.message);
    }
  } else {
    console.log("Comando DELETE no reconocido o argumentos incorrectos.");
  }
}

async function metodos() {
  try {
    if (comando === "GET") {
      await obtenerProductos(recurso, args);
    } else if (comando === "POST") {
      await agregarProductos(recurso, args);
    } else if (comando === "DELETE") {
      await eliminarProducto(recurso, args);
    } else {
      console.log(
        "Comando no reconocido, usa:\n" +
          "npm run start GET products\n" +
          "npm run start GET products/id\n" +
          "npm run start POST products title price category\n" +
          "npm run start DELETE products/id",
      );
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

metodos();
