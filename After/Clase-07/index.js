// import { argv } from "node:process";

// console.log("After clase 07");

/*
if (argv[2].toLowerCase() === "GET".toLowerCase()) {
  console.log("El parametro es GET");
}
*/

// console.log(argv.includes("GET"));

/*
if (argv[2].toLowerCase() === "POST".toLowerCase()) {
  console.log("El parametro es POST y el ID es: " + argv[3]);
}

console.log(argv.indexOf("GET"));
*/

// import matematicas, { restar } from "./math.js";

// console.log(restar, matematicas);

import { argv } from "node:process";

// Obtener el comando y los parámetros
const comando = argv[2]?.toUpperCase();
const parametro = argv[3];

// Manejar los diferentes comandos
switch (comando) {
  case "GET":
    console.log("Toma un dato");
    break;

  case "POST":
    if (parametro) {
      console.log(`Recibimos ${parametro} satisfactoriamente`);
    } else {
      console.log("Error: POST requiere un dato");
    }
    break;

  case "PUT":
    if (parametro) {
      console.log(
        `Modificamos el item con id: ${parametro} satisfactoriamente`
      );
    } else {
      console.log("Error: PUT requiere un ID");
    }
    break;

  case "DELETE":
    if (parametro) {
      console.log(`El item con el id: ${parametro} se eliminó con éxito`);
    } else {
      console.log("Error: DELETE requiere un ID");
    }
    break;

  default:
    console.log("Error: Comando no reconocido. Use GET, POST, PUT o DELETE");
}

