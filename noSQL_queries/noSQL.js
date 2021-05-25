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
db.restaurante.find({ "grades.score": { $gt: 90 } }).pretty();
// 9
db.restaurante.find({ "grades.score": { $gt: 80, $lt: 100 } }).pretty();
// 10
db.restaurante.find({ "address.coord": { $lt: -95.754168 } }).pretty();
// 11
db.restaurante
	.find({
		$and: [
			{ cuisine: { $ne: "American " } },
			{ "grades.score": { $gt: 70 } },
			{ "address.coord": { $lt: -65.754168 } },
		],
	})
	.pretty();
// 12
db.restaurante
	.find({
		cuisine: "American ",
		"grades.score": { $gt: 70 },
		"address.coord": { $lt: -65.754168 },
	})
	.pretty();
// 13
db.restaurante
	.find({
		$and: [
			{ borough: { $ne: "Brooklyn" } },
			{ cuisine: { $ne: "American " } },
			{ "grades.grade": "A" },
		],
	})
	.sort({ cuisine: -1 })
	.pretty();

// 14
db.restaurante.find(
	{ name: /^Wil/ },
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);
// 15
db.restaurante.find(
	{ name: /ces$/ },
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);
// 16
db.restaurante.find(
	{ name: /.*Reg.*/ },
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);
// 17
db.restaurante.find({
	borough: "Bronx",
	$or: [{ cuisine: "American " }, { cuisine: "Chinese" }],
});
