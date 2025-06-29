// Importamos las rutas en express
import { Router } from "express";

// Importamos la lógica desde la carpeta controllers
import {
	getAllProducts,
	searchProducts,
	getProductById,
	postProduct,
	putProductId,
	deleteProductId,
} from "../controllers/products.controllers.js";

const router = Router();

// GET all products
router.get("/products", getAllProducts);

// GET search
router.get("/products/search", searchProducts);

// GET id products. Dynamic routes.
router.get("/products/:id", getProductById);

// POST to modify products
router.post("/products", postProduct);

// PUT to modify the attributs products
router.put("/products/:id", putProductId);

// DELETE product by ID
router.delete("/products/:id", deleteProductId);

export default router;
