db.cars.aggregate([
    {$match: {maker: "Hyundai"
        }
    },
    {$project: {
        _id: 0,
        Car_Name: {$toUpper: {$concat: [
                        "$maker",
                        " ",
                        "$model"
                    ]
                }
            }
        }
    },
    {$out: "hyundai_cars"
    }
])
