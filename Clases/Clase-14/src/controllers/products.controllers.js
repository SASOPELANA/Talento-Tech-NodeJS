/// Importante;
// Desde el controlador siempre se responde al cliente, solo desde aquí. 👍

// Aquí dejamos toda la lógica de los métodos y las peticiones

// Importamos los models
import * as model from "../models/products.model.js";

// GET ALL
export const getAllProducts = async (req, res) => {
	const products = await model.getAllProducts();

	res.json(products);
};

// SEARCH
export const searchProducts = (req, res) => {
	const { name } = req.query;

	const products = model.getAllProducts();

	const filteredProducts = products.filter((p) =>
		p.name.toLowerCase().includes(name.toLowerCase()),
	);

	res.json(filteredProducts);
};

// GET ID
export const getProductById = async (req, res) => {
	const productsId = parseInt(req.params.id);

	const products = await model.getAllProducts();

	const product = products.find((p) => p.id === productsId);

	if (!product) {
		res.status(404).json({ Error: "El producto con ese ID no existe 😡 " });
	}

	res.json({ Producto_ID: product });
};

// POST
export const postProduct = async (req, res) => {
	// Obtenemos los parámetros del cuerpo del archivo
	const { name, price, category } = req.body;

	if (!name || !price || !category) {
		return res.json({
			message: "Faltan datos: name, price o category 😛",
		});
	}

	const newProduct = await model.postProduct({ name, price, category });

	res.status(201).json({ New_Product: newProduct });
};

// PUT
export const putProductId = async (req, res) => {
	const products = await model.getAllProducts();
	const productsId = parseInt(req.params.id, 10);
	const productsIndex = products.findIndex((p) => p.id === productsId);

	if (productsIndex === -1) {
		return res.status(404).json({ Error: "Producto no encontrado 💤" });
	}

	const { name, price } = req.body;

	products[productsIndex] = { id: productsId, name, price };
	res.json(products[productsIndex]);
};

// DELETE
export const deleteProductId = async (req, res) => {
	const productId = parseInt(req.params.id);

	const product = await model.deleteProductId(productId);

	if (!product) {
		return res.status(404).json({ Error: "Producto no encontrado por ID 💤 " });
	}

	// código 200 para responde y json, 204 para send
	res.status(200).json({ message: "Producto eliminado con exito 😎" });
};
