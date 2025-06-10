// Async Await

// Async --> Palabra clave que indica que la función es asíncrona
// Await --> Espera la resolución de una promesa antes de continuar.
// Try/Catch --> Manejo de errores en funciones asíncronas async

function taskAsync() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.5) {
        resolve("Tarea asincronica completada.");
      } else {
        reject(new Error("Tarea asincronica fallida"));
      }
    }, 1000);
  });
}

/*
taskAsync()
  .catch((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Tarea finalizada.");
  });
*/

// Uso de async con try/catch
async function main() {
  try {
    let respuesta = await taskAsync();
    console.log(respuesta);

    respuesta = await taskAsync();
    console.log(respuesta);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Siempre se ejecuta!!!");
  }
}

main();
