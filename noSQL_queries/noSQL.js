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
// 18
db.restaurante
	.find(
		{ borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
		{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
	)
	.pretty();
// 19
db.restaurante
	.find(
		{ borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
		{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
	)
	.pretty() >
	// 20

	db.restaurante
		.find(
			{ "grades:score": { $not: { $gt: 10 } } },
			{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
		)
		.pretty();
// 21
db.restaurante.find(
	{
		$or: [
			{ name: /^Wil/ },
			{
				$and: [
					{ cuisine: { $ne: "American " } },
					{ cuisine: { $ne: "Chinese" } },
				],
			},
		],
	},
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);
// 22
db.restaurante.find(
	{
		"grades.date": ISODate("2014-08-11T00:00:00Z"),
		"grades.grade": "A",
		"grades.score": 11,
	},
	{ restaurant_id: 1, name: 1, grades: 1 }
);
// 23
db.restaurante.find(
	{
		"grades.1.date": ISODate("2014-08-11T00:00:00Z"),
		"grades.1.grade": "A",
		"grades.1.score": 11,
	},
	{ restaurant_id: 1, name: 1, grades: 1 }
);
// 24
db.restaurante.find(
	{ "address.coord.1": { $gt: 42, $lte: 52 } },
	{ restaurant_id: 1, name: 1, address: 1, coord: 1 }
);
// 25
db.restaurante.find().sort({ name: 1 });
// 26
db.restaurante.find().sort({ name: -1 }).pretty();
// 27
db.restaurante.find().sort({ cuisine: 1 }, { borough: -1 }).pretty();
