use("Cul d'Ampolla");
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
					pattern: "@gmail.com$",
					description:
						"must be a string and match the regular expression pattern",
				},
			},
		},
	},
});

db.createCollection("invoice", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["cliente_id", "empleado_id", "gafas_id"],
			properties: {
				// `para la referencia del cliente que el empleado vendio las gafas
				cliente_id: {
					bsonType: "objectId",
					description: "must be an objectid and is required",
				},
				// `para la referencia del cliente que el empleado vendio las gafas
				empleado_id: {
					bsonType: "objectId",
					description: "must be an objectid and is required",
				},
				fetcha_de_registro: {
					bsonType: "date",
					description: "must be a date",
				},
				gafas_id: {
					bsonType: "objectId",
					description: "must be an objectid and is required",
				},
			},
		},
	},
});

//  Pizzeria
db.createCollection("provincias", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["nombre"],
			properties: {
				_id: {},
				nombre_de_provincias: {
					bsonType: "string",
					description: "nombre_de_provincias must be a string",
				},
			},
		},
	},
});

db.createCollection("localidad", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["nombre"],
			properties: {
				_id: {},
				nombre_de_localidad: {
					bsonType: "string",
					description: "nombre_de_provincias must be a string",
				},
			},
		},
	},
});
db.createCollection("clientes", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["nombre"],
			properties: {
				_id: {},
				nombre: {
					bsonType: "string",
					description: "Name is required string",
				},
				apellidos: {
					bsonType: "string",
					description: "apllidos is a string",
				},
				direccion: {
					bsonType: "string",
					description: "apllidos is a string",
				},
				codigo_postal: {
					bsonType: "string",
					description: "codigo postal is a string",
				},
				localidad: {
					bsonType: "objectId",
					description: "must be an objectid",
				},
				provincia: {
					bsonType: "objectId",
					description: "must be an objectid",
				},
				telefono: {
					bsonType: "string",
					description: "telephone number is a string",
				},
			},
		},
	},
});

db.createCollection("pedidos", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["nombre", "tipos_de_reparto"],
			properties: {
				_id: {},
				nombre: {
					bsonType: "string",
					description: "name is a required string",
				},
				fetcha: {
					bsonType: "date",
					description: "fetcha must be a date",
				},
				tipos_de_reparto: {
					enum: ["online", "tienda"],
					description: "can only be one of the enum values and is required",
				},
				cantidad: {
					bsonType: "int",
					description: "must be a integer",
				},
				precio: {
					bsonType: "int",
					description: "must be a integer",
				},
			},
		},
	},
});
