import express from "express";
// Corss para obtener información con puertos diferentes entre distintos servidores.
import cors from "cors";

const app = express();

// Configuración básica: Permitir todos los orígenes
// Permite todos los puertos.
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hola");
});

app.get("/item/12345", (req, res) => {
	// logica para devolver el item solicitado.
});

app.delete("item/12345", () => {
	// lógica para eliminar el item solicitado
});

// Middleware para manejar errores 404
app.use((req, res, next) => {
	res.status(404).send("Recurso no encontrado o ruta inválida. :(");
});

const PORT = 3000 || 5000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
