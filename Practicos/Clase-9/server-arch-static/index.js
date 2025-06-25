import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Configurar middleware para servir archivos estaticos
app.use(express.static(join(__dirname, "public")));

// middleware de aplicacion
app.use((req, res, next) => {
	console.log(`Datos recibidos: ${req.method} ${req.url}`);
	next(); // Pasa el control al siguiente middleware o ruta
});

app.get("/datos", (req, res) => {
	res.send("Hola desde Expres con middleware!!!");
});

app.get("/json", (req, res) => {
	res.json({ message: "Hola desde Expres con middleware, en un json!!" });
});

const PORT = 3000 || 5000;
app.listen(PORT, () => {
	console.log(`Servidor en http://localhost:${PORT}`);
});
