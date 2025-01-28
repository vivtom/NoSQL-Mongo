/// USING  MATCH, PROJECT, SORT and AGGREGATE 

db.cars.aggregate([
    {$match: {
        maker: "Hyundai"
        }
    },
    {$project: {
        _id: 0,
        maker: 1,
        model: 1,
        fuel_type: 1
        }
    },
    {$sort: {model: 1
        }
    }
])

db.cars.aggregate([
    {$sortByCount: "$maker"
    }
])