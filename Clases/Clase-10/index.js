import express from "express";

const app = express();

const productos = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
];

app.get("/", (req, res) => {
  res.send("<h1> Hola desde la API Rest, nodemon <h1>");
});

app.get("/productos/:id", (req, res) => {
  const productosId = productos.find(
    (item) => item.id === parseInt(req.params.id),
  );
  res.json(productosId);
});

const PORT = 3000;
app.listen(PORT, () => console.log("Servidor corriendo en Puerto: " + PORT));
