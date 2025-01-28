db.cars.insertOne(
    {
  "maker": "Tata",
  "model": "Nexon",
  "fuel_type": "Petrol",
  "transmission": "Automatic",
  "engine": {
  "type": "Turbocharged",
  "cc": 1199,
  "torque": "170 Nm"
  },
  "features": [
  "Touchscreen",
  "Reverse Camera",
  "Bluetooth Connectivity"
  ],
  "sunroof": false,
  "airbags": 2
  }
 
 )
 /* {
   acknowledged: true,
   insertedId: ObjectId('6794b93f35f5fd489e782984')
 } */
 db.cars.insertMany([
 [
  {
  "maker": "Hyundai",
  "model": "Creta",
  "fuel_type": "Diesel",
  "transmission": "Manual",
  "engine": {
  "type": "Naturally Aspirated",
  "cc": 1493,
  "torque": "250 Nm"
  },
  "features": [
  "Sunroof",
  "Leather Seats",
  "Wireless Charging",
 "Ventilated Seats",
 "Bluetooth"
  ],
  "sunroof": true,
  "airbags": 6
  },
  {
  "maker": "Maruti Suzuki",
  "model": "Baleno",
  "fuel_type": "Petrol",
  "transmission": "Automatic",
  "engine": {
  "type": "Naturally Aspirated",
  "cc": 1197,
  "torque": "113 Nm"
  },
  "features": [
  "Projector Headlamps",
  "Apple CarPlay",
  "ABS"
  ],
  "sunroof": false,
  "airbags": 2
  },
  {
  "maker": "Mahindra",
  "model": "XUV500",
  "fuel_type": "Diesel",
  "transmission": "Manual",
  "engine": {
  "type": "Turbocharged",
  "cc": 2179,
  "torque": "360 Nm"
  },
  "features": [
  "All-Wheel Drive",
  "Navigation System",
  "Cruise Control"
  ],
  "sunroof": true,
  "airbags": 6
  },
  {
  "maker": "Honda",
  "model": "City",
  "fuel_type": "Petrol",
  "transmission": "Automatic",
  "engine": {
  "type": "Naturally Aspirated",
  "cc": 1498,
  "torque": "145 Nm"
  },
  "features": [
  "Keyless Entry",
  "Auto AC",
  "Multi-angle Rearview Camera"
  ],
  "sunroof": false,
  "airbags": 4
  }
 ]
 ])
 /* {
   acknowledged: true,
   insertedIds: {
     '0': ObjectId('6794b9ac35f5fd489e782985')
   }
 } */
 db.orders.insertMany([[
     {
         "_id": "order1",
         "user_id": "user1",
         "product": "Laptop",
         "amount": 50000,
         "order_date": "2024-08-01"
     },
     {
         "_id": "order2",
         "user_id": "user2",
         "product": "Mobile Phone",
         "amount": 15000,
         "order_date": "2024-08-05"
     },
     {
         "_id": "order3",
         "user_id": "user1",
         "product": "Headphones",
         "amount": 2000,
         "order_date": "2024-08-10"
     },
     {
         "_id": "order4",
         "user_id": "user3",
         "product": "Tablet",
         "amount": 25000,
         "order_date": "2024-08-12"
     },
     {
         "_id": "order5",
         "user_id": "user4",
         "product": "Smart Watch",
         "amount": 8000,
         "order_date": "2024-08-15"
     }
 ]])
 /* {
    acknowledged: true,
    insertedIds: {
      '0': ObjectId('6794ba2935f5fd489e782986')
    }
  } */

 db.users.insertMany([
        [
            {
                "_id": "user1",
                "name": "Amit Sharma",
                "email": "amit.sharma@example.com",
                "phone": "+91-987654210",
                "address": "MG Road, Mumbai, Maharashtra"
            },
            {
                "_id": "user2",
                "name": "Priya Verma",
                "email": "priya.verma@example.com",
                "phone": "+91-987654211",
                "address": "Nehru Place, New Delhi, Delhi"
            },
            {
                "_id": "user3",
                "name": "Rahul Singh",
                "email": "rahul.singh@example.com",
                "phone": "+91-987654212",
                "address": "Sector 18, Noida, Uttar Pradesh"
            },
            {
                "_id": "user4",
                "name": "Anjali Nair",
                "email": "anjali.nair@example.com",
                "phone": "+91-987654213",
                "address": "Marine Drive, Kochi, Kerala"
            },
            {
                "_id": "user5",
                "name": "Vikram Desai",
                "email": "vikram.desai@example.com",
                "phone": "+91-987654214",
                "address": "Park Street, Kolkata, West Bengal"
            }
        ]])
   /* {
        acknowledged: true,
        insertedIds: {
        '0': ObjectId('6794ba8f35f5fd489e782987')
        }
    } */
        
        
        