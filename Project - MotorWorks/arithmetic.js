db.cars.aggregate([
    {$project: {
        _id: 0,
        model: 1,
        price: 1
        }
    },
    {$addFields: {
        price_in_lakhs: {
            $round: [
                    {$divide: [
                            "$price",
                            90000
                        ]
                    },
                    1
                ]
            }
        }
    }
])