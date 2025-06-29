// Aquí van los productos y se los retorna donde se los necesite.

const products = [
	{ id: 1, name: "RTX 5070 16 VRAM", price: 700 },
	{ id: 2, name: "RTX 5050 8 VRAM", price: 280 },
	{ id: 3, name: "RX 9060 XT 16 VRAM", price: 370 },
	{ id: 4, name: "RX 7800 8 VRAM", price: 290 },
	{ id: 5, name: "RX 9060 8 VRAM", price: 320 },
];

export const getAllProducts = () => {
	return products;
};
