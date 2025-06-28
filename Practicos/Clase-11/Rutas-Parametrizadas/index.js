import express from "express";
const app = express();

const frutas = [
	{
		id: 1,
		nombre: "mango",
	},
	{
		id: 2,
		nombre: "naranja",
	},
	{
		id: 3,
		nombre: "manzana",
	},
	{
		id: 4,
		nombre: "frutilla",
	},
];

app.get("/", (req, res) => {
	res.send("<h1> Hola desde Node y Express :)</h1>");
});

app.get("/frutas", (req, res) => {
	res.json({ Frutas: frutas });
});

// Uso de los path params
// Los path params nos permiten crear rutas dinámicas en lugar de rutas fijas
// Rutas dinámicas.
app.get("/item/:id", (req, res) => {
	const itemId = req.params.id;
	// logica para devolver el item
	res.send(`Devolviendo un item con ID: ${itemId}`);
});

// Rutas dinámicas con validaciones para buscar un id
app.get("/frutas/:id", (req, res) => {
	// Parseamos el id por que el params nos devuelve un string
	const frutaId = parseInt(req.params.id);

	// Buscamos el id en el array o base de datos
	const fruta = frutas.find((f) => f.id === frutaId);

	if (!fruta) {
		res.status(404).json({ message: "Fruta no encontrada por ID :(" });
	} else {
		res.json(fruta);
	}
});

// error 404 --> mensaje por defecto si no se encuentra una ruta o recurso.
app.use((req, res, next) => {
	res.status(404).json({ message: "Recurso no encontrado o ruta inválida :(" });
});

const PORT = 3000 || 5000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
