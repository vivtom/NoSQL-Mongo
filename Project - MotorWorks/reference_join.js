db.users.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"user_id",
        as: "orders"
    }}
])