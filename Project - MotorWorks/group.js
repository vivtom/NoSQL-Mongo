db.cars.aggregate([
    {$group: {
        _id: "$fuel_type",
        TotalCars: {$sum: 1
            }
        }
    }
])