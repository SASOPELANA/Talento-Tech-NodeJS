import fs from "fs";

import path from "path";

const __dirname = import.meta.dirname;

const jsonPath = path.join(__dirname, "./products.json");

const json = fs.readFileSync(jsonPath, "utf-8");

const products = JSON.parse(json);

export const getAllProducts = () => {
	return products;
};

export const getAllProductBy = (id) => {
	return products.find((item) => item.id === id);
};
