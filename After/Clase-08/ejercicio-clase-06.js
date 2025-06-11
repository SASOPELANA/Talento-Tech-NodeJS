/* 
 Misión 1:
 
1. Utiliza la API pública de Rick and Morty (docs) 
   para obtener la lista de personajes.

2. Con las herramientas then, catch y finally, procesa la respuesta y 
   devuelve por consola un array con los primeros 5 resultados de los 
   20 personajes recibidos.
 */

/*
fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((e) => console.error(e))
  .finally(() => {
    console.log("\nFinalizado.");
  });
*/

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    console.log("\n-----  Ejercicio 1  ------\n");
    const charaters = data.results.slice(0, 5);
    console.log(charaters); // --> mostramos los 5 resultados

    charaters.forEach((charaters) => {
      console.log(
        `${charaters.name}, status: ${charaters.status}, species: ${charaters.species}, gender: ${charaters.gender}`,
      );
    });
  })
  .catch((e) => console.error(e))
  .finally(() => {
    console.log("\nFinalizado.");
  });

/*   
 Misión 2:

 1. Realiza el mismo ejercicio anterior, pero esta vez usa una función 
    asíncrona con async y await para consumir la API.

 2. Asegúrate de manejar errores correctamente con un bloque try/catch.
 */

async function obtenerPersonajes() {
  try {
    const lista = await fetch(
      "https://rickandmortyapi.com/api/character/1,2,3,4,5",
    );
    console.log("\n-----  Ejercicio 2  ------\n");
    const data = await lista.json();
    console.log(data);
  } catch (e) {
    console.log("Error: ", e);
  } finally {
    console.log("\nFinalizado.");
  }
}

obtenerPersonajes();
