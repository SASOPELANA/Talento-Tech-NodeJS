import express from "express";
const app = express();

const ventas = [
	{
		id: 1,
		nombre: "Pc Alta Gama",
		descripcion: "GPU: RTX 5070 TI 16VRAM, 32 RAM DRR5",
		precio: 1000,
	},
	{
		id: 2,
		nombre: "Pc Gama Media",
		descripcion: "GPU: RX 9060 XT 16VRAM, 16 RAM DRR5",
		precio: 650,
	},
	{
		id: 3,
		nombre: "Pc Gama Baja",
		descripcion: "GPU: RTX 5050 8VRAM, 8 RAM DRR5",
		precio: 500,
	},
];

app.get("/", (req, res) => {
	res.send("Hola desde Node.js y Express!!");
});

app.get("/tienda", (req, res) => {
	res.send("<h1> Hola, Bienvenid@ a nuestra tienda de PC Gamers!! </h1>");
});

app.get("/tienda/ventas", (req, res) => {
	res.json(ventas);
});

app.get("/tienda/ventas/:id", (req, res) => {
	const productosId = ventas.find((p) => p.id === parseInt(req.params.id));

	if (!productosId) {
		res.json({ message: "El producto con ese ID no existe" });
	} else {
		res.json(productosId);
	}
});

const PORT = 3000 || 5000;
app.listen(PORT, () => {
	console.log(`http://localhots:${PORT}`);
});
