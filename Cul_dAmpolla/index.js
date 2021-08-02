const { MongoClient } = require("mongodb");

const provedors = [
	{
		id_provedor: 1,
		nombre: "sayeed",
		direccion: {
			calle: "av. diagonal",
			numero: "145",
			piso: "3",
			puerta: "1",
			codigo_postal: "08011",
			pais: "España",
		},
		telefono: "8888888",
		fax: "754545454",
		nif: "x4545454y",
		marcas: ["ale-hope,ray-ban"],
	},
];
const gafas = [
	{
		id_producto: 1,
		marca: "ray-ban",
		graduation: [{ cirstal_derecho: "0.12" }, { cirstal_izquierdo: "1.25" }],
		tipo_de_montura: "pasta",
		color_de_marco: "blanco",
		color_de_vaso: [
			{ color_de_derecho: "blanco-transparente" },
			{ color_de_izquierdo: "blanco-transparent" },
		],
		precio: 145.75,
	},
];

const cliente = [
	{
		id_cliente: 1,
		nombre: "Robin",
		apellidos: "Jack",
		dirección: {
			calle: "Sabadell",
			numero: "12",
			piso: "1",
			puerta: "1",
			ciudad: "Sabadell",
			codigo_postal: "08036",
		},
		telefono: "44444474",
		email: "robin@gmail.com",
		fecha_de_registro: new Date("2020-10-21"),
		recomendados: { id_cliente: 2, id_cliente: 3 },
		facturas: [
			{
				id_factura: 1,
				detalles: [
					{ id_detalle: 1, id_producto: 1, cantidad: 1, precio: 123.56 },
				],
				vendedor: { id_empleado: 1, nombre: "Priyam" },
				Total_factura: 145.75,
			},
		],
	},
	{
		id_cliente: 2,
		nombre: "Elena",
		apellidos: "nuñez",
		dirección: {
			calle: "Sabadell",
			numero: "12",
			piso: "1",
			puerta: "1",
			ciudad: "Sabadell",
			codigo_postal: "08055",
		},
		telefono: "44444474",
		email: "elena@gmail.com",
		fecha_registro: new Date("2014-10-21"),
		recomendados: { id_cliente: 2, id_cliente: 3 },
		facturas: [
			{
				id_factura: 1,
				detalles: [
					{ id_detalle: 1, id_producto: 1, cantidad: 1, precio: 123.56 },
				],
				vendedor: { id_empleado: 2, nombre: "Mike" },
				Total_factura: 145.75,
			},
		],
	},
];
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect();
async function createListing(data, newListing) {
	const database = await client.db("Cul_d'Ampolla");
	database.dropDatabase();
	const collection = await database.collection(newListing);
	const result = await collection.insertMany(data);
	console.log(
		`${result.insertedCount} new listing(s) created with the following id(s):`
	);
	console.log(result.insertedIds);
}
createListing(provedors, "provedor");
createListing(gafas, "gafas");
createListing(cliente, "cliente");
