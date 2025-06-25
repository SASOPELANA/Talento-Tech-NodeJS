/*  
 Este servidor básico nos brinda una base para entender cómo funciona un servidor web,
pero presenta limitaciones cuando intentamos ampliarlo. Por ejemplo, el código actual
responde únicamente a la ruta por defecto "/" (https://miservidor.com/), lo que complica la
configuración de rutas adicionales como "/productos" o "/productos/1". Además, este
servidor solo responde con contenido estático, sin capacidad para generar respuestas
dinámicas o realizar operaciones adicionales antes de responder.
 */

// Ejemplo Servidor básico con métodos de NodeJS

/*
import http from "http";

const server = http.createServer((req, res) => {
	// Código de estado http
	res.statusCode = 200;
	// Configuramos el tipo de contenido
	res.setHeader("Content-Type", "text/plain");
	// Enviamos la respuesta
	res.end("Hello Word!");
});

const PORT = 3000 || 5000;
server.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
*/

// Express JS
import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello Word, this is Express and Node.js!");
});

// GET con json
app.get("/json", (req, res) => {
	res.json({
		message: "Hello Word!",
		framework: "Node.js, Express!",
	});
});

app.get("/productos", (req, res) => {
	res.send("Bienvenid@ a la página de productos.");
});

app.get("/productos/14", (req, res) => {
	res.send("Estás viendo el producto N° 14.");
});

const PORT = 3000 || 5000;
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
