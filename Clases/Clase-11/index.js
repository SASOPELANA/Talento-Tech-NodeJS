import express from "express";

const app = express();

const productos = [
	{
		id: 1,
		title: "Producto 1",
		name: "RTX 3090 12 VRAM",
		price: 300,
	},
	{
		id: 2,
		title: "Producto 2",
		name: "RTX 5050 8 VRAM",
		price: 250,
	},
	{
		id: 3,
		title: "Producto 3",
		name: "RX 9060 XT 8 VRAM",
		price: 390,
	},
];

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Api Rest en NodeJS");
});

// GET
app.get("/productos", (req, res) => {
	res.json(productos);
});

app.get("/productos/search", (req, res) => {
	const { nombre } = req.query;

	const filteredProductos = productos.filter((p) =>
		p.title.toLowerCase().includes(nombre.toLowerCase()),
	);

	res.json(filteredProductos);
});

app.get("/productos/:id", (req, res) => {
	const { id } = req.params;

	const products = productos.find((p) => p.id == id);

	if (!products) {
		res.status(404).send("Producto no encontrado");
	} else {
		res.json(products);
	}
});

// POST
app.post("/productos", (req, res) => {
	const { title, price, name } = req.body;

	const newProduct = {
		id: productos.length + 1,
		title,
		name,
		price,
	};

	productos.push(newProduct);

	res.status(201).json(newProduct);
});

// PUT
app.put("/productos/:id", (req, res) => {
	const productoId = parseInt(req.params.id, 10);
	const productosIndex = productos.findIndex((p) => p.id === productoId);

	if (productosIndex === -1) {
		return res.status(404).json("Producto no encontrado");
	}

	const { title, price, name } = req.body;

	productos[productosIndex] = { id: productoId, title, name, price };
	res.json(productos[productosIndex]);
});

// DELETE
app.delete("/productos/:id", (req, res) => {
	const productoId = parseInt(req.params.id, 10);
	const productosIndex = productos.findIndex((p) => p.id === productoId);

	if (productosIndex === -1) {
		return res.status(404).json("Producto no encontrado");
	}

	productos.splice(productosIndex, 1);
	res.json(productos);
});

const PORT = 3000;
app.listen(PORT, () => console.log("http://localhost:3000"));
