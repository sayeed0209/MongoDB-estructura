db.createCollection("provedores", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["nombre", "direccion", "telefono", "fax", "NIF"],
			properties: {
				nombre: {
					bsonType: "string",
					description: "must be a string and is required",
				},
				NIF: {
					bsonType: "string",
					description: "must be a string and is required",
				},
				fax: {
					bsonType: "string",
					description: "must be a string and is required",
				},

				address: {
					bsonType: "object",
					properties: {
						calle: {
							bsonType: "string",
							description: "must be a string if the field exists",
						},
						numero: {
							bsonType: "int",
							description: "must be a integer if the field exists",
						},
						piso: {
							bsonType: "string",
							description: "must be a string if the field exists",
						},
						puerta: {
							bsonType: "string",
							description: "must be a string if the field exists",
						},

						ciudad: {
							bsonType: "string",
							description: "must be a string and is required",
						},
						codigoPostal: {
							bsonType: "string",
							description: "must be a string and is required",
						},
						pais: {
							bsonType: "string",
							description: "must be a string and is required",
						},
					},
				},
			},
		},
	},
});

db.createCollection("gafas", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["marca", "graduacion", "tipo_de_montura", "fax", "NIF"],
			properties: {
				marca: {
					bsonType: "string",
					description: "must be a string and is required",
				},
				graduacion: {
					bsonType: "string",
					description: "must be a string and is required",
				},

				tipo_de_montura: {
					enum: ["flotante", "pasta", "metálica"],
					description: "items' must contain the stated fields.",
				},
				color_de_montura: {
					bsonType: "array",
					description: "must be a string and is required",
				},
				color_de_cristal: {
					bsonType: "array",
					description: "must be a string and is required",
				},
				color_de_montura: {
					bsonType: "string",
					description: "must be a string and is required",
				},
				precio: {
					bsonType: "number",
					description: "must be a string and is required",
				},
				provedor_id: {
					bsonType: "objectId",
					description: "must be an objectid and is required",
				},
			},
		},
	},
});
db.createCollection("clientes", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["nombre", "codigo_postal", "correo_electronico"],
			properties: {
				nombre: {
					bsonType: "string",
					description: "must be a string and is required",
				},
				codigo_postal: {
					bsonType: "string",
					description: "must be a string and is required",
				},

				telefono: {
					bsonType: "string",
					description: "must be a string and is required",
				},
				correo_electronico: {
					bsonType: "string",
					description: "must be a string and is required",
				},
				// cliente sera recomendado
				recomendado_id: {
					bsonType: "objectId",
					description: "must be an objectid and is required",
				},
			},
		},
	},
});
db.createCollection("empleadores", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["nombre", "edad", "correo_electronico"],
			properties: {
				nombre: {
					bsonType: "string",
					description: "must be a string and is required",
				},
				edad: {
					bsonType: "int",
					description: "must be a integer and is required",
				},
				correo_electronico: {
					bsonType: "string",
					description: "must be a string and is required",
				},
				// `para la referencia del cliente que el empleado vendio las gafas
				client_id: {
					bsonType: "objectId",
					description: "must be an objectid and is required",
				},
			},
		},
	},
});
