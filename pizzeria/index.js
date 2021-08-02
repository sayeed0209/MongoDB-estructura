const { MongoClient } = require("mongodb");

const cliente = [
	{
		id_cliente: 1,
		nombre: "Mike",
		apellidos: "Cuin",
		direccion: {
			calle: "Calle murcia",
			numero: "12",
			piso: "6",
			puerta: "2",
			ciudad: "Barcelona",
			localidad: "Barcelona",
			provincia: "Barcelona",
			codigo_postal: "080102",
			pais: "España",
		},
		pedidos: {
			id_pedido: 1,
			fecha_hora: new Date("2020-11-19T18:56:20.197Z"),
			tipo: "domicilio",
			detalle: [
				{ id_producto: 1, cantidad: 2 },
				{ id_producto: 2, cantidad: 2 },
			],
			precio_total: 19.34,
			id_cliente: 1,
			id_tienda: 1,
			entregas: {
				id_empleado: 1,
				fecha_hora: new Date("2020-11-19T18:56:20.197Z"),
			},
		},
	},
];

const tiendas = [
	{
		id_tienda: 1,
		direccion: {
			calle: "calle muntaner",
			numero: "11",
			piso: "1",
			puerta: "1",
			ciudad: "Barcelona",
			localidad: "Barcelona",
			provincia: "Barcelona",
			cp: "080000",
		},
		empleados: [
			{
				id_empleado: 1,
				nombre: "Adrash",
				apellidos: "Chanda",
				nif: "111111R",
				cargo: "repartidor",
			},
			{
				id_empleado: 2,
				nombre: "Priyam",
				apellidos: "Dey",
				nif: "44444444T",
				cargo: "cocinero",
			},
		],
	},
];
const productos = [
	{
		id_producto: 1,
		nombre: "pizza",
		descripción: "Pizza 4 quesos",
		imagen:
			"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80",
		categoria: { nombre: "masa fina" },
		precio:8.50,
	},
	{
		id_producto: 2,
		nombre: "Cheese burger",
		descripción: "",
		imagen:
			"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		categoria: { nombre: null },
		precio: 7.50,
	},
	{
		id_producto: 3,
		nombre: "bebida",
		descripción: "coca_cola",
		imagen:
			"https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		categoria: { nombre: null },
		precio: 2.50,
	},
];
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect();
async function createListing(data, newListing) {
	const database = await client.db("pizzerria");
	database.dropDatabase();
	const collection = await database.collection(newListing);
	const result = await collection.insertMany(data);
	console.log(
		`${result.insertedCount} new listing(s) created with the following id(s):`
	);
	console.log(result.insertedIds);
}
createListing(cliente, "cliente");
createListing(tiendas, "tiendas");
createListing(productos, "productos");
