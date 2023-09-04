import datetime

users = [
    {
        "id": 1,
        "username": "demolition",
        "password": "password",
        "email": "user@demo.io",
        "first_name": "Demo",
        "last_name": "Lition",
        "address": "123 Main St",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 2,
        "username": "jane_doe",
        "password": "password",
        "email": "jane@gmail.com",
        "first_name": "Jane",
        "last_name": "Doe",
        "address": "45 Oak Ave",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 3,
        "username": "carlosalcaraz",
        "password": "password123",
        "email": "carlos@yahoo.com",
        "first_name": "Carlos",
        "last_name": "Alcaraz",
        "address": "759 Elm Rd",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 4,
        "username": "harrykane",
        "password": "secret1",
        "email": "harry@spurs.com",
        "first_name": "Harry",
        "last_name": "Kane",
        "address": "570 Maple St",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 5,
        "username": "tomsaccount",
        "password": "mypassword",
        "email": "tom@example.com",
        "first_name": "Tom",
        "last_name": "Wambsgans",
        "address": "890 Walnut Ave",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 6,
        "username": "sarah_brown",
        "password": "pass123word",
        "email": "sarah@gmail.com",
        "first_name": "Sarah",
        "last_name": "Brown",
        "address": "342 Pine Rd",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 7,
        "username": "crazyhorse",
        "password": "supersecurepassword",
        "email": "neil@gmail.com",
        "first_name": "Neil",
        "last_name": "Young",
        "address": "645 Cedar Ave",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 8,
        "username": "sonny",
        "password": "passwordpassword",
        "email": "son@spurs.com",
        "first_name": "Heung-Min",
        "last_name": "Son",
        "address": "846 Oak Rd",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }
]


restaurants = [
    {
        "id": 1,
        "name": "Gusanoz",
        "address": "59 Main St",
        "category": "Mexican",
        "price_range": 1,
        "owner_id": 1,
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/res1-main-image.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 2,
        "name": "Jewel of India",
        "address": "456 Oak Ave",
        "category": "Indian",
        "price_range": 2,
        "owner_id": 1,
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/res2-main-image.jpeg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 3,
        "name": "Sushiya",
        "address": "79 Elm St",
        "category": "Japanese",
        "price_range": 2,
        "owner_id": 2,
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/sushiya-main-image.png",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 4,
        "name": "Worthy Burger",
        "address": "42 Main St",
        "category": "Bistro",
        "price_range": 3,
        "owner_id": 2,
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/res4-main-image.png",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 5,
        "name": "L'elephant Vert",
        "address": "890 Carpenter St",
        "category": "French",
        "price_range": 4,
        "owner_id": 3,
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/L_elephant+Vert+Banner.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 6,
        "name": "Mr Pizza",
        "address": "1 Brick Rd",
        "category": "Italian",
        "price_range": 3,
        "owner_id": 4,
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/Mr.+Pizza+Banner.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 7,
        "name": "Thai Orchid",
        "address": "11 Cedar Ave",
        "category": "Thai",
        "price_range": 4,
        "owner_id": 5,
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-mainImage--credit-jerome-jome.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 8,
        "name": "Mike's Grill",
        "address": "876 Oak Rd, Grilleville",
        "category": "Fast_Food",
        "price_range": 4,
        "owner_id": 6,
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-mainImage--credit-victoria-shes.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 9,
        "name": "Tuckerbox",
        "address": "35 Junction Road",
        "category": "Mediterranean",
        "price_range": 4,
        "owner_id": 7,
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/tuckerbox-banner.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 10,
        "name": "Killdeer Farm",
        "address": "987 Pine St",
        "category": "Vegetarian",
        "price_range": 1,
        "owner_id": 8,
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/killdeer-banner.jpeg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 11,
        "name": "Mount Ida",
        "address": "5931 Blenheim Rd",
        "category": "Mediterranean",
        "price_range": 3,
        "owner_id": 1,
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/Mt.+Ida+Banner.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }
]




reviews = [
    {
        "id": 1,
        "user_id": 2,
        "restaurant_id": 1,
        "review_text": "Delicious food and a great ambiance! I would recommend the al pastor tacos, they're great and are served with very generous portions of sides.",
        "stars": 5,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 2,
        "user_id": 3,
        "restaurant_id": 1,
        "review_text": "Fantastic service and flavors. I will be back soon!",
        "stars": 5,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 3,
        "user_id": 4,
        "restaurant_id": 1,
        "review_text": "Not up to the mark.",
        "stars": 2,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 4,
        "user_id": 4,
        "restaurant_id": 2,
        "review_text": "Decent food, but slow service.",
        "stars": 3,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 5,
        "user_id": 5,
        "restaurant_id": 2,
        "review_text": "Exquisite presentation and flavors!",
        "stars": 5,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 6,
        "user_id": 6,
        "restaurant_id": 2,
        "review_text": "A disappointing experience.",
        "stars": 2,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 7,
        "user_id": 7,
        "restaurant_id": 3,
        "review_text": "Highly recommended! Will visit again.",
        "stars": 4,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 8,
        "user_id": 8,
        "restaurant_id": 3,
        "review_text": "Truly authentic sushi and excellent service.",
        "stars": 3,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 9,
        "user_id": 1,
        "restaurant_id": 3,
        "review_text": "Terrible experience overall - food was cold and not cooked.",
        "stars": 1,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 10,
        "user_id": 1,
        "restaurant_id": 4,
        "review_text": "Loved the ambiance, food, and service! Hats off to the chef!",
        "stars": 5,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 11,
        "user_id": 6,
        "restaurant_id": 4,
        "review_text": "Could improve on the menu variety - a bit too slim for my liking.",
        "stars": 3,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 12,
        "user_id": 3,
        "restaurant_id": 4,
        "review_text": "The best dining experience ever!",
        "stars": 5,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 13,
        "user_id": 4,
        "restaurant_id": 5,
        "review_text": "Overpriced for the quality provided. Ingredients didn't seem to be the best quality.",
        "stars": 2,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 14,
        "user_id": 7,
        "restaurant_id": 5,
        "review_text": "Pleasant experience, decent flavors. I would have liked to see a bit more variety on the menu.",
        "stars": 4,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 15,
        "user_id": 2,
        "restaurant_id": 5,
        "review_text": "Average in every aspect. Good service though!",
        "stars": 3,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 16,
        "user_id": 6,
        "restaurant_id": 6,
        "review_text": "I wouldn't recommended this restaurant to my worst enemy.",
        "stars": 1,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 17,
        "user_id": 7,
        "restaurant_id": 6,
        "review_text": "Great food but poor service. OK cocktails.",
        "stars": 3,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 18,
        "user_id": 2,
        "restaurant_id": 6,
        "review_text": "Outstanding culinary experience.",
        "stars": 5,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 19,
        "user_id": 1,
        "restaurant_id": 7,
        "review_text": "Tasty Massamun curry, very authentic however slightly expensive.",
        "stars": 1,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 20,
        "user_id": 2,
        "restaurant_id": 7,
        "review_text": "Very tasty high quality food, and the ambience was lovely. Only downside was the slightly dirty glassware.",
        "stars": 4,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 21,
        "user_id": 6,
        "restaurant_id": 7,
        "review_text": "Average food with good, speedy service.",
        "stars": 3,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 22,
        "user_id": 4,
        "restaurant_id": 8,
        "review_text": "Exceeded my expectations for a fast food restaurant, great service from the employees!",
        "stars": 5,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 23,
        "user_id": 5,
        "restaurant_id": 8,
        "review_text": "Unpleasant experience overall, would not recommend.",
        "stars": 2,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 24,
        "user_id": 2,
        "restaurant_id": 8,
        "review_text": "Mike's was a great place to grab a quick bite to eat. Very reasonably priced tasty food.",
        "stars": 5,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 25,
        "user_id": 8,
        "restaurant_id": 9,
        "review_text": "Not worth the price. Seafood was not fresh.",
        "stars": 2,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 26,
        "user_id": 6,
        "restaurant_id": 9,
        "review_text": "One of the best meals I've had! Best gyro I've ever had.",
        "stars": 5,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 27,
        "user_id": 3,
        "restaurant_id": 9,
        "review_text": "Service needs improvement. It took an hour to get a menu.",
        "stars": 2,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 28,
        "user_id": 1,
        "restaurant_id": 10,
        "review_text": "This farm-to-table meal was unlike any I've ever had before!",
        "stars": 5,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 29,
        "user_id": 2,
        "restaurant_id": 10,
        "review_text": "Will not visit again - dirt in the lettuce.",
        "stars": 1,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 30,
        "user_id": 3,
        "restaurant_id": 10,
        "review_text": "A delightful culinary experience! Would give it more stars if I could!",
        "stars": 5,
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }
]


menu_items = [{
        "id": 1,
        "restaurant_id": 1,
        "name": "Chips and Guac",
        "type": "appetizer",
        "price": 11,
        "description": "fresh and made in house",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id1.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 2,
        "restaurant_id": 1,
        "name": "Mexican Corn",
        "type": "appetizer",
        "price": 9,
        "description": "deep fried and topped with house made lime mayo, queso fresco, chili powder, and cilantro",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id2.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 3,
        "restaurant_id": 1,
        "name": "Avocado Fries",
        "type": "appetizer",
        "price": 8.5,
        "description": "lightly seasoned panko battered avocado slices. fried and served with jalapeño lime aioli",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id3.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 4,
        "restaurant_id": 1,
        "name": "Steak Enchilada",
        "type": "entree",
        "price": 16,
        "description": "steak wrapped in three corn tortillas. smothered in melted queso chihuahua and choice of sauce. topped with pico de gallo, queso fresco, and cilantro",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id4.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 5,
        "restaurant_id": 1,
        "name": "Soft Taco",
        "type": "entree",
        "price": 5,
        "description": "served with choice of filling atop two layered fresh handmade warm corn tortillas. queso fresco, cilantro, and scallions",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id5.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 6,
        "restaurant_id": 1,
        "name": "Crispy Taco",
        "type": "entree",
        "price": 6.5,
        "description": "choice of filling. griddle fried corn tortillas with melted chihuahua cheese, green onions, red cabbage, and cilantro. not vegetarian friendly",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id6.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 7,
        "restaurant_id": 1,
        "name": "Churros",
        "type": "dessert",
        "price": 8,
        "description": "fried dough topped with cinnamon, house made caramel, and powdered sugar.",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id7.png",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 8,
        "restaurant_id": 1,
        "name": "Flan",
        "type": "dessert",
        "price": 7,
        "description": "fresh custard flan, made in house",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id8.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 9,
        "restaurant_id": 1,
        "name": "Paloma",
        "type": "beverage",
        "price": 13,
        "description": "sauza silver tequila, fresh lime juice, and jarritos grapefruit soda",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id9.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 10,
        "restaurant_id": 1,
        "name": "Strawberry Margarita",
        "type": "beverage",
        "price": 11,
        "description": "house made strawberry infused silver tequila, strawberry puree, triple sec, fresh lime juice, and agave",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id10.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 11,
        "restaurant_id": 1,
        "name": "Michelada",
        "type": "beverage",
        "price": 8,
        "description": "house made bloody mix topped with dos equis lager",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id11.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },{
        "id": 12,
        "restaurant_id": 2,
        "name": "Vegetable Samosa",
        "type": "appetizer",
        "price": 3,
        "description": "Two turnovers, stuffed with veggies & spices",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id12.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 13,
        "restaurant_id": 2,
        "name": "Paneer Pakora",
        "type": "appetizer",
        "price": 5,
        "description": "Homemade cheese fritters in chickpea flour",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id13.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 14,
        "restaurant_id": 2,
        "name": "Aloo Pakora",
        "type": "appetizer",
        "price": 4,
        "description": "Deep fried potato fritters",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id14.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 15,
        "restaurant_id": 2,
        "name": "Aloo Gobhi",
        "type": "entree",
        "price": 14,
        "description": "Fresh cauliflower and potatoes cooked in onions, tomato, and herbs",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id15.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 16,
        "restaurant_id": 2,
        "name": "Malai Kofta",
        "type": "entree",
        "price": 14,
        "description": "Garden vegetable & cheese dumplings cooked in a rich sauce with nuts and cream",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id16.png",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 17,
        "restaurant_id": 2,
        "name": "Baigan Bhartha",
        "type": "entree",
        "price": 16,
        "description": "Roasted eggplant sauteed in onion, tomato, and peas",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id17.png",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 18,
        "restaurant_id": 2,
        "name": "Kheer",
        "type": "dessert",
        "price": 4,
        "description": "Traditional Indian rice pudding flavored with cardamom and raisins",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id18.png",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 19,
        "restaurant_id": 2,
        "name": "Gulab Jamun",
        "type": "dessert",
        "price": 3,
        "description": "Cinnamon flavored pastry sponge, soaked in honey and rosewater",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id19.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 20,
        "restaurant_id": 2,
        "name": "Mango Lassi",
        "type": "beverage",
        "price": 3,
        "description": "Creamy yogurt and mango drink",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id20.png",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 21,
        "restaurant_id": 2,
        "name": "Salted Lassi",
        "type": "beverage",
        "price": 3,
        "description": "Creamy and salty yogurt drink",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id21.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 22,
        "restaurant_id": 2,
        "name": "Kingfisher Ultra",
        "type": "beverage",
        "price": 6,
        "description": "Imported Indian Lager",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id22.png",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },{
        "id": 23,
        "restaurant_id": 3,
        "name": "Tofu Teriyaki",
        "type": "appetizer",
        "price": 5.50,
        "description": "Deep fried tofu with house teriyaki sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id23.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 24,
        "restaurant_id": 3,
        "name": "Edamame",
        "type": "appetizer",
        "price": 3,
        "description": "Lightly salted soybeans",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id24.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 25,
        "restaurant_id": 3,
        "name": "Shumai",
        "type": "appetizer",
        "price": 9,
        "description": "Shrimp dumplings served steamed or fried",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id25.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 26,
        "restaurant_id": 3,
        "name": "Kopdol Bibimbap",
        "type": "entree",
        "price": 15,
        "description": "Assorted vegetables cooked in hot stone pot",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id26.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 27,
        "restaurant_id": 3,
        "name": "Beef Bulgoki",
        "type": "entree",
        "price": 14,
        "description": "Thin-sliced beef marinated with a house special sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id27.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 28,
        "restaurant_id": 3,
        "name": "Sashimi Donburi",
        "type": "entree",
        "price": 19,
        "description": "Assortment of raw fish over a bed of white rice with house special spicy sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id28.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 29,
        "restaurant_id": 3,
        "name": "Soft Shell Crab Roll",
        "type": "entree",
        "price": 16,
        "description": "Deep-fried soft shell crab, avocado, with raw fish egg and teriyaki sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id29.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 30,
        "restaurant_id": 3,
        "name": "Matcha Swiss Roll",
        "type": "dessert",
        "price": 11,
        "description": "Fluffy sponge cake rolled up with fresh matcha cream in the middle",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id30.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 31,
        "restaurant_id": 3,
        "name": "Cold Sake Shot",
        "type": "beverage",
        "price": 4,
        "description": "Imported Japanese Sake",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id31.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 32,
        "restaurant_id": 3,
        "name": "Saporo Beer",
        "type": "beverage",
        "price": 6,
        "description": "Imported Japanese Beer",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id32.webp",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 33,
        "restaurant_id": 3,
        "name": "Assorted Soda",
        "type": "beverage",
        "price": 4,
        "description": "Fountain drink, served with lemon peel",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id33.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 34,
        "restaurant_id": 4,
        "name": "Worthy Burger",
        "type": "entree",
        "price": 18,
        "description": "6oz Almanack Farms  beef patty, Plymouth cheddar, secret sauce, bibb lettuce, and red onion",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id34.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 35,
        "restaurant_id": 4,
        "name": "Veg-Out",
        "type": "entree",
        "price": 17,
        "description": "White Bean and Kale patty with Bayley Hazen blue cheese, dill pickles, ranch, bibb lettuce and red onions",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id35.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 36,
        "restaurant_id": 4,
        "name": "Turduckey",
        "type": "entree",
        "price": 19,
        "description": "Turkey and Duck Confit Patty with Garlic Aioli, Plymouth Cheddar, North Country Smokehouse Bacon, Tomato, Bibb Lettuce and Red Onion",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id36.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 37,
        "restaurant_id": 4,
        "name": "Jammin Bird",
        "type": "entree",
        "price": 15,
        "description": "Buttermilk fried chicken thigh, Chipotle Bacon Jam, Plymouth Cheddar, Bibb Lettuce and Red Onion",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id37.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 38,
        "restaurant_id": 4,
        "name": "Big Daddy M Burger",
        "type": "entree",
        "price": 19,
        "description": " 6oz Almanack Farms beef patty, Cambozola Cheese, North Country bacon, Caramelized Onions, Garlic Aioli, bibb lettuce and red onion",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id38.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 39,
        "restaurant_id": 4,
        "name": "Mushroom Swiss Burger",
        "type": "entree",
        "price": 19,
        "description": "6oz Almanack Farms beef patty, Boggy Meadow swiss, roasted mushrooms, garlic aioli, bibb lettuce and red onion",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id39.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 40,
        "restaurant_id": 4,
        "name": "Fishwich",
        "type": "entree",
        "price": 16,
        "description": "Cajun Tuna Steak, Pickled Pineapple, Pesto Mayo, Bibb Lettuce and Red Onion",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id40.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 41,
        "restaurant_id": 4,
        "name": "Miso Chocolate Chip Cookie",
        "type": "dessert",
        "price": 11,
        "description": "House-made Chocolate Chip Cookie with Miso.  Topped with Black Sesame",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id41.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 42,
        "restaurant_id": 4,
        "name": "Worthy Donuts",
        "type": "dessert",
        "price": 9,
        "description": "La Panciata Dough, Fried and Topped with Cinnamon Sugar. Served with Creme Anglaise",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id42.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 43,
        "restaurant_id": 4,
        "name": "Rotating VT Craft Beer Selection",
        "type": "beverage",
        "price": 8,
        "description": "16oz pour",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id43.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 44,
        "restaurant_id": 4,
        "name": "Maple Soda",
        "type": "beverage",
        "price": 5,
        "description": "Local VT maple syrup in house-made seltzer water, served with a lemon slice",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/id44.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 45,
        "restaurant_id": 5,
        "name": "Fried Green Tomatoes",
        "type": "appetizer",
        "price": 7,
        "description": "Fresh local green tomatoes, fried in panko breadcrumbs and served with a house special sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-45.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 46,
        "restaurant_id": 5,
        "name": "House Salad",
        "type": "appetizer",
        "price": 5,
        "description": "Local greens with a choice of dressings",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-46.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 47,
        "restaurant_id": 5,
        "name": "Cheese Puffs",
        "type": "appetizer",
        "price": 9,
        "description": "Puff pastry with VT aged cheddar cheese and sesame seeds",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-47.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 48,
        "restaurant_id": 5,
        "name": "Steak Tartare",
        "type": "entree",
        "price": 37,
        "description": "Grade A steak tartare, made fresh every day with imported Italian olive oil",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-48.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 49,
        "restaurant_id": 5,
        "name": "Atlantic Salmon with Brussel Sprouts",
        "type": "entree",
        "price": 33,
        "description": "Perfectly cooked salmon filet with cream sauce and crispy brussel sprouts",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-49.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 50,
        "restaurant_id": 5,
        "name": "Garden Burger",
        "type": "entree",
        "price": 19,
        "description": "Homemade quinoa and sweet potato burger served with all the usual toppings",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-50.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 51,
        "restaurant_id": 5,
        "name": "Duck Confit",
        "type": "entree",
        "price": 42,
        "description": "House Speciality Dish",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-51.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }, {
        "id": 52,
        "restaurant_id": 5,
        "name": "Terrine",
        "type": "dessert",
        "price": 16,
        "description": "Three layered terrine served with raspberry coulis",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-52.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 53,
        "restaurant_id": 5,
        "name": "Profiterole",
        "type": "dessert",
        "price": 14,
        "description": "Choux pastry ball with filling of pastry cream and dark chocolate ganache",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-53.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 54,
        "restaurant_id": 5,
        "name": "Mas Verde IPA",
        "type": "beverage",
        "price": 7,
        "description": "River Roost Brewery's most sought after beer",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-54.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 55,
        "restaurant_id": 5,
        "name": "Selection of French Wines",
        "type": "beverage",
        "price": 50,
        "description": "Chef curated list of rotating French wines, starting at $50",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-55.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 56,
        "restaurant_id": 6,
        "name": "Garlic Bread",
        "type": "appetizer",
        "price": 8,
        "description": "Fresh baguette and housemade garlic sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-56.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 57,
        "restaurant_id": 6,
        "name": "Eggplant Parmesan",
        "type": "appetizer",
        "price": 9,
        "description": "Local eggplant sliced thinly with tomato sauce and aged parmesan",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-57.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 58,
        "restaurant_id": 6,
        "name": "Chicken Wings",
        "type": "appetizer",
        "price": 25,
        "description": "20 Regular, Buffalo, or Lemon-Pepper wings",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-58.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 59,
        "restaurant_id": 6,
        "name": "12 inch Gluten Free Pizza",
        "type": "entree",
        "price": 25,
        "description": "World renowned GF crust, choice of up to three toppings",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-59.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 60,
        "restaurant_id": 6,
        "name": "14 inch Pizza",
        "type": "entree",
        "price": 19,
        "description": "Choice of up to three toppings",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-60.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 61,
        "restaurant_id": 6,
        "name": "Calzone",
        "type": "entree",
        "price": 19,
        "description": "Choice of up to three fillings",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-61.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 62,
        "restaurant_id": 6,
        "name": "22 inch Pizza",
        "type": "entree",
        "price": 33,
        "description": "Choice of up to four toppings",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-62.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 63,
        "restaurant_id": 6,
        "name": "Tiramisu",
        "type": "dessert",
        "price": 9,
        "description": "Cake made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, mascarpone cheese, and flavoured with cocoa",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-63.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 64,
        "restaurant_id": 6,
        "name": "Gelato",
        "type": "dessert",
        "price": 6,
        "description": "12 rotating flavors of housemade gelato, one size",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-64.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 65,
        "restaurant_id": 6,
        "name": "Fountain Beverage",
        "type": "beverage",
        "price": 5,
        "description": "Selection of Coca-cola drinks",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-65.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 66,
        "restaurant_id": 6,
        "name": "Beer on tap",
        "type": "beverage",
        "price": 8,
        "description": "Weekly rotation of domestic and international beers",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/menu-item-66.avif",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 67,
        "restaurant_id": 7,
        "name": "Fresh Summer Rolls",
        "type": "appetizer",
        "price": 8,
        "description": "Carrot, cucumber, basil leaves and fresh lettuce, wrapped in soft rice paper, served with homemade peanut sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-menuItem67-freshSummerRolls--credit-cocobols.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 68,
        "restaurant_id": 7,
        "name": "Scallion Pancakes",
        "type": "appetizer",
        "price": 11,
        "description": "Deep Fried Scallion Pancakes and Served with homemade curry sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-menuItem68-scallionPancakes--credit-clasiqh.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 69,
        "restaurant_id": 7,
        "name": "Chicken Satay",
        "type": "appetizer",
        "price": 13,
        "description": "Grilled chicken breast marinated with yellow curry powder and coconut milk and served with cucumber sauce and peanut sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-menuItem69-chickenSatay--credit-syauqy-ayyash.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 70,
        "restaurant_id": 7,
        "name": "Pad Thai",
        "type": "entree",
        "price": 15,
        "description": "Thin rice noodles stir-fried with egg, green onions, bean sprouts and ground peanuts on the side",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-menuItem71-padSeeEw--credit-john-aledia.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 71,
        "restaurant_id": 7,
        "name": "Pad See Ew",
        "type": "entree",
        "price": 17,
        "description": "Wide rice noodles stir-fried with egg, sweet soy sauce, broccoli and carrots",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-menuItem70-padThai--credit-ruth-georgiev.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 72,
        "restaurant_id": 7,
        "name": "Massamun Curry",
        "type": "entree",
        "price": 22,
        "description": "Thai Massamun curry paste with coconut milk, sweet potatoes, carrots, & onions",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-menuItem72-massamunCurry--credit-bruna-branco.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 73,
        "restaurant_id": 7,
        "name": "Red Curry",
        "type": "entree",
        "price": 22,
        "description": "Thai Red curry paste with coconut milk, basil leaves, bamboo shoots, green beans and bell peppers",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-menuItem73-redCurry--credit-emy.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 74,
        "restaurant_id": 7,
        "name": "Crispy Duck Fried Rice",
        "type": "entree",
        "price": 26,
        "description": "Fried rice with egg, onions, carrots, green peas topped with crispy duck",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-menuItem74-crispyDuckFriedRice--credit-christopher-alvarenga.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 75,
        "restaurant_id": 7,
        "name": "Mango Sticky Rice",
        "type": "dessert",
        "price": 7,
        "description": "Rice covered in sweetened condensed milk with fresh mango slices",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-menuItem75-mangoStickyRice--credit-markus-winkler.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 76,
        "restaurant_id": 7,
        "name": "Thai Iced Tea",
        "type": "beverage",
        "price": 6,
        "description": "Speciality Thai Iced Tea with sweetened condensed milk, boba optional",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-menuItem76-thaiIcedTea--credit-markus-winkler.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 77,
        "restaurant_id": 7,
        "name": "Thai Iced Coffee",
        "type": "beverage",
        "price": 6,
        "description": "Speciality Thai Iced Coffee with sweetened condensed milk",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest7-menuItem77-thaiIcedCoffee--credit-demi-deherrera.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 78,
        "restaurant_id": 8,
        "name": "Hush Puppies",
        "type": "appetizer",
        "price": 14,
        "description": "Deep-fried cornmeal batter balls, crispy on the outside and soft on the inside, served with house dipping sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-menuItem78-hushPuppies--credit-mak.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 79,
        "restaurant_id": 8,
        "name": "Pimento Cheese",
        "type": "appetizer",
        "price": 12,
        "description": "A creamy spread made from sharp cheddar cheese, mayonnaise, and pimento peppers, served with fresh salt crackers",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-menuItem79-pimentoCheese--credit-rob-wicks.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 80,
        "restaurant_id": 8,
        "name": "Fried Okra",
        "type": "appetizer",
        "price": 9,
        "description": "Sliced okra coated in cornmeal and spices. Deep-fried until golden and crispy",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-menuItem80-friedOkra--credit-rakshit-yadav.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 81,
        "restaurant_id": 8,
        "name": "Pulled Pork Sandwich",
        "type": "entree",
        "price": 22,
        "description": "Slow-cooked and smoked pork shoulder pulled into tender shreds, served on a freshly baked bun",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-menuItem81-pulledPorkSandwich--credit-rachel-bramlett.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 82,
        "restaurant_id": 8,
        "name": "Smoked Brisket",
        "type": "entree",
        "price": 28,
        "description": "A Texas specialty, beef brisket slow-cooked over apple wood until tender, served with a choice of two sides",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-menuItem82-smokedBrisket--credit-sebastian-doll.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 83,
        "restaurant_id": 8,
        "name": "Spare Ribs",
        "type": "entree",
        "price": 28,
        "description": "Local farm-raised pork ribs seasoned with a secret dry rub and grilled, served with a choice of two sides",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-menuItem83-spareRibs--credit-bao-menglong.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 84,
        "restaurant_id": 8,
        "name": "Buttermilk Fried Chicken",
        "type": "entree",
        "price": 25,
        "description": "A classic Southern fried chicken sandwich, served with a choice of three sides",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-menuItem84-buttermilkFriedChicken--credit-erik-mclean.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 85,
        "restaurant_id": 8,
        "name": "Pecan Pie",
        "type": "dessert",
        "price": 13,
        "description": "A Southern classic, made with love",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-menuItem85-pecanPie--credit-keighla-exum.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 86,
        "restaurant_id": 8,
        "name": "Peach Cobbler",
        "type": "dessert",
        "price": 9,
        "description": "Fresh peaches, served with a scoop of delicious vanilla ice cream",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-menuItem86-peachCobbler--credit-sarah-brown.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 87,
        "restaurant_id": 8,
        "name": "Sweet Tea",
        "type": "beverage",
        "price": 5,
        "description": "Black tea sweetened with sugar and served over ice",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-menuItem87-sweetTea--credit-crystal-tubens.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 88,
        "restaurant_id": 8,
        "name": "Mint Julep",
        "type": "beverage",
        "price": 11,
        "description": "Bourbon of your choosing, mint leaves, cane sugar and water",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/rest8-menuItem88-mintJulep--credit-alison-marras.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 89,
        "restaurant_id": 9,
        "name": "Turkish Meze Platter",
        "type": "appetizer",
        "price": 19,
        "description": "Haydari, hummus, babaganoush, turkish salsa, stuffed grape leaves. Served with lavash bread. For gluten free option add fresh cut veggie sticks",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/tuckerbox-tukishmeze.jpeg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 90,
        "restaurant_id": 9,
        "name": "Babaganoush",
        "type": "appetizer",
        "price": 13,
        "description": "Smoked eggplant, roasted red pepper, tahini, garlic, fresh lemon, organic turkish extra virgin olive oil served with lavash bread",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/vicky-ng-baba.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 91,
        "restaurant_id": 9,
        "name": "Stuffed Grape Leaves",
        "type": "appetizer",
        "price": 11,
        "description": "Extra thin vine leaves imported from turkey and hand stuffed with turkish rice, pine nuts, black currants, turkish herbs",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/levi-meir-clancy-grapeleaves.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 92,
        "restaurant_id": 9,
        "name": "Döner Kebab",
        "type": "entree",
        "price": 16,
        "description": "Marinated lamb & beef slow roasted on vertical rotisserie, sliced thin to serve on homemade bun or fresh lavash wrap with lettuce, tomato, onion, pickled red cabbage, served with side of yogurt sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/z-grills-australia-kebab.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 93,
        "restaurant_id": 9,
        "name": "Haloumi Grilled Cheese",
        "type": "entree",
        "price": 16,
        "description": "Imported Turkish Haloumi grilled to perfection inside lavash bread, served with a yogurt sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/jay-gajjar-a4pnELU87jE-unsplash.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 94,
        "restaurant_id": 9,
        "name": "Falafel Sandwich",
        "type": "entree",
        "price": 17,
        "description": "Homemade falafel made with organic turkish chickpeas, celery, parsley, onion, garlic, and tahini, served on homemade bun or fresh lavash wrap with lettuce, onion, tomato, & pickled red cabbage",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/freunde-des-snacks-e-v-iIlVIWdf_b0-unsplash.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 95,
        "restaurant_id": 9,
        "name": "Spice Roasted Chicken",
        "type": "entree",
        "price": 22,
        "description": "Very flavorful house marinated chicken, full of turkish herbs and spices, oven roasted and julienne cut, served on homemade bun or fresh lavash wrap with lettuce, tomato, onion, pickled red cabbage, served with side of yogurt sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/angela-bailey-chicken.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 96,
        "restaurant_id": 9,
        "name": "Turkish Red Lentil Soup",
        "type": "entree",
        "price": 14,
        "description": "A delicious blend of organic turkish red lentils, turkish seasoning, fresh herbs",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/steve-tsang-lentilsoup.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 97,
        "restaurant_id": 9,
        "name": "Fruit Salad",
        "type": "dessert",
        "price": 7,
        "description": "A mix of fresh, local fruit",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/jo-sonn-zeFy-fruitsalad.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 98,
        "restaurant_id": 9,
        "name": "Mint Tea",
        "type": "beverage",
        "price": 4,
        "description": "Very sweet tea made with fresh mint leaves",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/gustavo-de-camargo-minttea.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 99,
        "restaurant_id": 9,
        "name": "Mexican Coca-cola",
        "type": "beverage",
        "price": 6,
        "description": "Imported Coca-cola made with cane sugar",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/paul-gaudriault-coke.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 100,
        "restaurant_id": 10,
        "name": "Fresh Ciabata Rolls",
        "type": "appetizer",
        "price": 7,
        "description": "Baked fresh every morning, served with salted butter",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/toa-heftiba-ciabatta.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 101,
        "restaurant_id": 10,
        "name": "House Greens",
        "type": "appetizer",
        "price": 13,
        "description": "Choice of goat cheese or blue cheese, comes with herb vinaigrette",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/anna-pelzer_house-greens.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 102,
        "restaurant_id": 10,
        "name": "Charred Tri-colored Cumin Carrots",
        "type": "appetizer",
        "price": 13,
        "description": "Served with golden raisins, cashews and Vadouvan curry yogurt",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/adam-jaime_carrots.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 103,
        "restaurant_id": 10,
        "name": "Wagyu Top Sirloin",
        "type": "entree",
        "price": 75,
        "description": "confit smashed fingerling potatoes, melted leeks, grilled asparagus with roasted garlic and a thyme demi glace",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/justus-menke-wagyu.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 104,
        "restaurant_id": 10,
        "name": "Pan Seared Duck Breast",
        "type": "entree",
        "price": 47,
        "description": "Served with kimchi fried rice, green beans and a cherry gastrique",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/emma-houghton-duck.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 105,
        "restaurant_id": 10,
        "name": "Horseradish Crusted Cod",
        "type": "entree",
        "price": 36,
        "description": "Served with herb mashed potatoes, crispy leeks and a balsamic reduction",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/david-b-townsend-cod.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 106,
        "restaurant_id": 10,
        "name": "Pan Seared Pork Porterhouse",
        "type": "entree",
        "price": 41,
        "description": "Served with crispy fingerling potatoes, broccoli, artichoke, and a peppercorn cognac cream sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/alex-munsell-porkchop.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 107,
        "restaurant_id": 10,
        "name": "Pavlova",
        "type": "dessert",
        "price": 9,
        "description": "macerated strawberries and blueberries, toasted walnuts, strawberry sauce, and whipped cream",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/toa-heftiba-pavlova.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 108,
        "restaurant_id": 10,
        "name": "Bittersweet Chocolate S'more",
        "type": "dessert",
        "price": 12,
        "description": "graham cracker crust served with creme anglaise",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/kayla-speid-smore.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 109,
        "restaurant_id": 10,
        "name": "Blue Moon Sorbet",
        "type": "dessert",
        "price": 8.5,
        "description": "almond tuile",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/kobby-mendez-cream.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    },
    {
        "id": 110,
        "restaurant_id": 10,
        "name": "Maple Ice Cream",
        "type": "dessert",
        "price": 10,
        "description": "served with chocolate sauce",
        "image_url": "https://vancouber-eats.s3.us-west-2.amazonaws.com/brooke-cagle_maple-cream.jpg",
        "created_at": datetime.datetime.now(),
        "updated_at": datetime.datetime.now()
    }
]


past_orders = [
    {
        "id": 1,
        "user_id": 1,
        "menu_items": "1,2,3",
        "total_cost": 28.5,
        "restaurant_id": 1,
        "created_at": datetime.datetime.now()
    },
    {
        "id": 2,
        "user_id": 2,
        "menu_items": "100,102,103",
        "total_cost": 95,
        "restaurant_id": 10,
        "created_at": datetime.datetime.now()
    },
    {
        "id": 3,
        "user_id": 3,
        "menu_items": "25,26,29,30,31",
        "total_cost": 55,
        "restaurant_id": 3,
        "created_at": datetime.datetime.now()
    },
    {
        "id": 4,
        "user_id": 4,
        "menu_items": "40,41,43",
        "total_cost": 35,
        "restaurant_id": 4,
        "created_at": datetime.datetime.now()
    },
    {
        "id": 5,
        "user_id": 5,
        "menu_items": "61,63",
        "total_cost": 28,
        "restaurant_id": 6,
        "created_at": datetime.datetime.now()
    },
    {
        "id": 6,
        "user_id": 6,
        "menu_items": "68,69,70,76",
        "total_cost": 45,
        "restaurant_id": 7,
        "created_at": datetime.datetime.now()
    },
    {
        "id": 7,
        "user_id": 7,
        "menu_items": "92,97,98",
        "total_cost": 27,
        "restaurant_id": 9,
        "created_at": datetime.datetime.now()
    },
    {
        "id": 8,
        "user_id": 8,
        "menu_items": "78,79,80,87",
        "total_cost": 40,
        "restaurant_id": 8,
        "created_at": datetime.datetime.now()
    }
]
