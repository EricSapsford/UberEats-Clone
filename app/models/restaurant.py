from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from .review import Review
from .order import Order
from .menu_item import MenuItem
import enum

class RestaurantCategory(enum.Enum):
    Mexican = "Mexican"
    Indian = "Indian"
    Japanese = "Japanese"
    Bistro = "Bistro"
    French = "French"
    Italian = "Italian"
    Thai = "Thai"
    Fast_Food = "Fast Food"
    Mediterranean = "Mediterranean"
    Vegetarian = "Vegetarian"

    def to_list():
        return [
            "Mexican",
            "Indian",
            "Japanese",
            "Bistro",
            "French",
            "Italian",
            "Thai",
            "Fast Food",
            "Mediterranean",
            "Vegetarian"
        ]

class Restaurant(db.Model):
    __tablename__ = 'restaurants'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    category = db.Column(db.Enum(RestaurantCategory), nullable=False)
    price_range = db.Column(db.Integer, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    image_url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=False)

    #Foreign Key relationship defined below

    #one-to-many: one restaurant can have many reviews
    reviews_rel = db.relationship("Review", back_populates="restaurants_rel")

    #many-to-one: one user can own many restaurants
    users_rel = db.relationship("User", back_populates="restaurants_rel")

    #one-to-many: one restaurant can have many orders
    orders_rel = db.relationship("Order", back_populates="restaurants_rel")

    #one-to-many: one restaurant can have many menu-items
    menu_items_rel = db.relationship("MenuItem", back_populates="restaurants_rel")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "category": self.category,
            "priceRange": self.price_range,
            "ownerId": self.owner_id,
            "imageUrl": self.image_url,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at
        }
