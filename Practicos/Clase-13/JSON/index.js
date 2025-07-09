import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const alumnosDb = {
	name: "Juan Perez",
	age: 29,
	isStudent: true,
	courses: ["Programacion", "Base de Datos"],
};

app.get("/", (req, res) => {
	res.send("<h1> Hola desde Node y Express - Apis Rest 😎</h1>");
});

app.get("/alumnos", (req, res) => {
	// uso de json de en javascripts
	//const dataDB = JSON.parse(alumnosDb);
	res.json({ alumnosDb });
});

// Middleware para manejar errores 404, por defecto
app.use((req, res, next) => {
	res.status(404).send("Información no válida");
});

// Puerto --> serve run
const PORT = 3000 || 5000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
