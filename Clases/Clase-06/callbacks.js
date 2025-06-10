// Callbacks
// Es una función que se para como argumento a otra función.

// Ejecución --> Se ejecuta cuando de completa la tarea asincrónica
// Ejemplo --> taskAsync simula una tarea que tarda 3 segundos en completarse.

function mosrtrar(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}

mosrtrar(() => console.log("Callbacks"));
