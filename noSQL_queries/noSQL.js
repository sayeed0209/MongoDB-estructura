// Escribe una consulta para mostrar restaurant_id, name, borough y cuisine por todos los documentos en la colección Restaurantes
// Escribe una consulta para mostrar restaurant_id, name, borough y cuisine, pero excluir el campo _id por todos los documentos en la colección Restaurantes
// Escribe una consulta para mostrar restaurant_id, name, borough y zip code, pero excluir el campo _id por todos los documentos en la colección Restaurantes
// Escribe una consulta para mostrar todo los restaurantes que están en el Bronx
// Escribe una consulta para mostrar los primeros 5 restaurantes que están en el Bronx
// Escribe una consulta para mostrar el próximo 5 restaurantes después de saltar los primeros 5 del Bronx
// Escribe una consulta para encontrar los restaurantes que tienen un resultado de más de 90
// Escribe una consulta para encontrar los restaurantes que tienen un resultado de más que 80 pero menos que 100
// Escribe una consulta para encontrar los restaurantes cuáles localizan en valor de latitud menos que -95.754168
// 1
db.restaurante.find().pretty();
// 2
db.restaurante
	.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
	.pretty();
// 3
db.restaurante
	.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
	.pretty();
// 4
db.restaurante
	.find(
		{},
		{ restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0 }
	)
	.pretty();
// 5
db.restaurante.find({ borough: "Bronx" }).pretty();
//  6
db.restaurante.find({ borough: "Bronx" }).limit(5).pretty();
//7
db.restaurante.find({ borough: "Bronx" }).skip(5).limit(5).pretty();
// 8
// 9
// 10
db.restaurante.find({ "address.coord": { $lt: -95.754168 } }).pretty();
