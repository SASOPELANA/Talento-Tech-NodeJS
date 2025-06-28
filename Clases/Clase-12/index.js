import express from "express";
import cors from "cors";

const app = express();

const products = [
	{ id: 1, name: "RTX 5070 16 VRAM", price: 700 },
	{ id: 2, name: "RTX 5050 8 VRAM", price: 280 },
	{ id: 3, name: "RX 9060 XT 16 VRAM", price: 370 },
	{ id: 4, name: "RX 7800 8 VRAM", price: 290 },
	{ id: 5, name: "RX 9060 8 VRAM", price: 320 },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Apis Rest en Node.js y Express 😄" });
});

// GET all products
app.get("/products", (req, res) => {
	res.json(products);
});

// GET search
app.get("/products/search", (req, res) => {
	const { name } = req.query;

	const filteredProducts = products.filter((p) =>
		p.name.toLowerCase().includes(name.toLowerCase()),
	);

	res.json(filteredProducts);
});

// GET id products. Dynamic routes.
app.get("/products/:id", (req, res) => {
	const productsId = parseInt(req.params.id);

	const product = products.find((p) => p.id === productsId);

	if (!product) {
		res.status(404).json({ Error: "El producto con ese ID no existe 😡 " });
	}

	res.json({ Producto_ID: product });
});

// POST to modify products
app.post("/products", (req, res) => {
	// Obtenemos los parámetros del cuerpo del archivo
	const { name, price } = req.body;

	const newProduct = {
		id: products.length + 1,
		name,
		price,
	};

	products.push(newProduct);

	res.status(201).json({ New_Product: newProduct });
});

// PUT to modify the attributs products
app.put("/products/:id", (req, res) => {
	const productsId = parseInt(req.params.id, 10);
	const productsIndex = products.findIndex((p) => p.id === productsId);

	if (productsIndex === -1) {
		return res.status(404).json({ Error: "Producto no encontrado 💤" });
	}

	const { name, price } = req.body;

	products[productsIndex] = { id: productsId, name, price };
	res.json(products[productsIndex]);
});

// DELETE product by ID
app.delete("/products/:id", (req, res) => {
	const productId = parseInt(req.params.id);
	const productsIndex = products.findIndex((p) => p.id === productId);

	if (productsIndex === -1) {
		return res.status(404).json({ Error: "Producto no encontrado por ID 💤 " });
	}

	products.splice(productsIndex, 1);

	res.status(200).json({ message: "Producto eliminado con exito 😎" });
});

// Middleware para manejar errores 404, por defecto
app.use((req, res, next) => {
	res.status(404).json({ message: "Informacion no valida." });
});

const PORT = 3000 || 5000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
