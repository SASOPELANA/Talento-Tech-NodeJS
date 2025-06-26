import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("<h1> Hola desde Node.js y Express!! 😃</h1>");
});

const PORT = 3000 || 5000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
