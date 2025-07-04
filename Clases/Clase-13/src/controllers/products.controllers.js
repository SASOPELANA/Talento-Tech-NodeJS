// Aquí dejamos toda la lógica de los métodos y las peticiones

// Importamos los services
import * as service from "../services/products.service.js";

export const getAllProducts = (req, res) => {
	res.json(service.getAllProducts());
};

export const searchProducts = (req, res) => {
	const { name } = req.query;

	const products = service.getAllProducts();

	const filteredProducts = products.filter((p) =>
		p.name.toLowerCase().includes(name.toLowerCase()),
	);

	res.json(filteredProducts);
};

export const getProductById = (req, res) => {
	const productsId = parseInt(req.params.id);

	const products = service.getAllProducts();

	const product = products.find((p) => p.id === productsId);

	if (!product) {
		res.status(404).json({ Error: "El producto con ese ID no existe 😡 " });
	}

	res.json({ Producto_ID: product });
};

export const postProduct = (req, res) => {
	// Obtenemos los parámetros del cuerpo del archivo
	const { name, price } = req.body;

	const products = service.getAllProducts();

	const newProduct = {
		id: products.length + 1,
		name,
		price,
	};

	products.push(newProduct);

	res.status(201).json({ New_Product: newProduct });
};

export const putProductId = (req, res) => {
	const products = service.getAllProducts();
	const productsId = parseInt(req.params.id, 10);
	const productsIndex = products.findIndex((p) => p.id === productsId);

	if (productsIndex === -1) {
		return res.status(404).json({ Error: "Producto no encontrado 💤" });
	}

	const { name, price } = req.body;

	products[productsIndex] = { id: productsId, name, price };
	res.json(products[productsIndex]);
};

export const deleteProductId = (req, res) => {
	const products = service.getAllProducts();
	const productId = parseInt(req.params.id);
	const productsIndex = products.findIndex((p) => p.id === productId);

	if (productsIndex === -1) {
		return res.status(404).json({ Error: "Producto no encontrado por ID 💤 " });
	}

	products.splice(productsIndex, 1);

	res.status(200).json({ message: "Producto eliminado con exito 😎" });
};
