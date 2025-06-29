// Importamos las rutas en express
import { Router } from "express";

const router = Router();

const products = [
	{ id: 1, name: "RTX 5070 16 VRAM", price: 700 },
	{ id: 2, name: "RTX 5050 8 VRAM", price: 280 },
	{ id: 3, name: "RX 9060 XT 16 VRAM", price: 370 },
	{ id: 4, name: "RX 7800 8 VRAM", price: 290 },
	{ id: 5, name: "RX 9060 8 VRAM", price: 320 },
];

// GET all products
router.get("/products", (req, res) => {
	res.json(products);
});

// GET search
router.get("/products/search", (req, res) => {
	const { name } = req.query;

	const filteredProducts = products.filter((p) =>
		p.name.toLowerCase().includes(name.toLowerCase()),
	);

	res.json(filteredProducts);
});

// GET id products. Dynamic routes.
router.get("/products/:id", (req, res) => {
	const productsId = parseInt(req.params.id);

	const product = products.find((p) => p.id === productsId);

	if (!product) {
		res.status(404).json({ Error: "El producto con ese ID no existe 😡 " });
	}

	res.json({ Producto_ID: product });
});

// POST to modify products
router.post("/products", (req, res) => {
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
router.put("/products/:id", (req, res) => {
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
router.delete("/products/:id", (req, res) => {
	const productId = parseInt(req.params.id);
	const productsIndex = products.findIndex((p) => p.id === productId);

	if (productsIndex === -1) {
		return res.status(404).json({ Error: "Producto no encontrado por ID 💤 " });
	}

	products.splice(productsIndex, 1);

	res.status(200).json({ message: "Producto eliminado con exito 😎" });
});

export default router;
