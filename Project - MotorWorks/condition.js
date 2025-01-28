db.cars.aggregate([
    {$project: {
        _id: 0,
        maker: 1,
        model: 1,
        fuel_cat: {
            $cond: {
                if: {$eq: [
                            "$fuel_type",
                            "Petrol"
                        ]
                    },
                    then: "Petrol Car",
                else: "Non_petrol Car"
                }
            }
        }
    }
])