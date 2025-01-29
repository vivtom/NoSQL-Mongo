db.cars.aggregate([
    {$project: {
        _id: 0,
        model: 1,
        is_diesel: {
            $regexMatch: {
                input: "$fuel_type",
                regex: "Dies"
                }
            }
        }
    }
])