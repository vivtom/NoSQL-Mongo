db.cars.aggregate([
    {$project: {
        _id: 0,
        maker: 1,
        model: 1,
        budget_cat: {
            $switch: {
                branches: [
                        { //If car is less than 5 Lakhs
                        case: {$lt: [
                                    "$price",
                                    500000
                                ]
                            },
                            then: "Budget"
                        },
                        {
                            //Car price range between 5-10 lakhs
                        case: {$and: [
                                    {$gte: [
                                            "$price",
                                            500000
                                        ]
                                    },
                                    {$lt: [
                                            "$price",
                                            1000000
                                        ]
                                    }
                                ]
                            },
                            then: "Mid-Range"
                        },
                        {
                        case: {$gte: [
                                    "$price",
                                    1000000
                                ]
                            },
                            then: "Premium"
                        }
                    ],
                default: "Unknown"
                }
            }
        }
    }
])