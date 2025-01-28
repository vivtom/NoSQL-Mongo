db.cars.aggregate(
    {$project: 
    {
      _id: 0,
      model: 1,
      date: "$$NOW"
}
})