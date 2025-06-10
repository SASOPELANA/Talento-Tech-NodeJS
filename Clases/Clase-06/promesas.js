// Objeto Promise
// Es un objeto que respresnta el resultado eventual de una tarea asicronica

// 1 -> Estados -> Resolved (exitoso) o Rejected ( erroneo)
// 2 -> Métodos -> Utiliza .then(), catch() y .finally() para manejar resultados

// todos los métodos asincronicos usan callback

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("OK");
    reject("Error");
  }, 2000);
});

// las Promise tienen tres métodos -> .then  -> .catch() -> .finally()
promesa
  .then((response) => {
    console.log(response); // ← esto es un callback
  })
  .catch((error) => {
    console.log(error); // ← esto es un callback
  })
  .finally(() => {
    console.log("Siempre se ejecuta"); // ← esto es un callback
  });
