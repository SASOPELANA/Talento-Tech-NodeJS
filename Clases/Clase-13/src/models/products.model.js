// Aquí no responde el modelo, responde el controlador
// El controlador responde al cliente, aquí solo se devuelve datos lógicos

import fs from "fs";

import path from "path";

const __dirname = import.meta.dirname;

const jsonPath = path.join(__dirname, "./products.json");

const json = fs.readFileSync(jsonPath, "utf-8");

const products = JSON.parse(json);

// console.log(products);

// get all
export const getAllProducts = () => {
	return products;
};

// get id
export const getProductById = (id) => {
	return products.find((item) => item.id === id);
};

// post
export const postProduct = (data) => {
	const newProduct = {
		id: products.length + 1,
		...data,
	};

	products.push(newProduct);
	// Escribir en el json o archivo
	fs.writeFileSync(jsonPath, JSON.stringify(products));
	return newProduct;
};

// Delete
export const deleteProductId = (id) => {
	const productIndex = products.findIndex((p) => p.id === id);

	if (productIndex != -1) {
		const product = products.splice(productIndex, 1);

		fs.writeFileSync(jsonPath, JSON.stringify(products));

		return product;
	} else {
		return null;
	}
};
