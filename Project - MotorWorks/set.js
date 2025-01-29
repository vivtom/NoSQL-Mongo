db.cars.aggregate([
    { $match: { maker: "Hyundai"
        }
    },
    { $set: {
        total_service_cost: {
            $sum: "$service_history.cost"
            }
        }
    },
    { $project: {
        _id: 0,
        model: 1,
        total_service_cost: 1
        }
    }
])
