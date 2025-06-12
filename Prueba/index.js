import { argv } from "node:process";

const method = argv[2];
const resource = argv[3];
const args = argv.slice(4);

const datos = "https://fakestoreapi.com/products";

async function getProducts(resource, args) {
  if (resource === "products" && !args[0]) {
    // GET all products
    const res = await fetch(datos);
    const data = await res.json();
    console.log(data);
  } else if (resource.startsWith("products/")) {
    // GET product by ID
    const productId = resource.split("/")[1];
    const res = await fetch(`${datos}/${productId}`);
    const data = await res.json();
    console.log(data);
  } else {
    console.log("Comando GET no reconocido o argumentos incorrectos.");
  }
}

async function postProduct(resource, args) {
  if (resource === "products") {
    // POST new product
    const [title, price, category] = args;
    if (!title || !price || !category) {
      console.log("Faltan argumentos para crear el producto.");
      return;
    }
    const body = {
      title,
      price: parseFloat(price),
      category,
      description: "Producto creado desde CLI",
      image: "https://i.pravatar.cc",
    };
    const res = await fetch(datos, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
  } else {
    console.log("Comando POST no reconocido o argumentos incorrectos.");
  }
}

async function deleteProduct(resource) {
  if (resource.startsWith("products/")) {
    // DELETE product by ID
    const productId = resource.split("/")[1];
    const res = await fetch(`${datos}/${productId}`, { method: "DELETE" });
    const data = await res.json();
    console.log(data);
  } else {
    console.log("Comando DELETE no reconocido o argumentos incorrectos.");
  }
}

async function metodos() {
  try {
    if (method === "GET") {
      await getProducts(resource, args);
    } else if (method === "POST") {
      await postProduct(resource, args);
    } else if (method === "DELETE") {
      await deleteProduct(resource);
    } else {
      console.log("Comando no reconocido o argumentos incorrectos.");
    }
  } catch (error) {
    console.error("Error id no existe:", error.message);
  }
}

metodos();
