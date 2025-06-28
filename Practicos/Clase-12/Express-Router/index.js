import express from "express";
import cors from "cors";

const app = express();

// Configuración básica: Para permitir todos los origenes de puertos.
app.use(cors());

app.get("/", (req, res) => {
	res.send("<h1>Hola desde Express y Node.js 😃</h1>");
});

// Middleware para manejar errores 404
app.use((req, res, next) => {
	res.status(404).json({ message: "Recurso no encontrado 💤" });
});

const PORT = 3000 || 5000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
