
db.createCollection("users3", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "phone"],
            properties:{
                name:{
                    bsonType: "string",
                    description: "Name should be string"
                }
            }
        }
    },
    validationLevel: "strict",
    validationAction: "error"
})