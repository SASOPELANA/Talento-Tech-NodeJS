// Aquí se retorna los productos

import * as model from "../models/products.model.js";

export const getAllProducts = () => {
	return model.getAllProducts();
};
