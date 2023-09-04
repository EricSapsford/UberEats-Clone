from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import enum

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


db = SQLAlchemy()

# helper function for adding prefix to foreign key column references in production
def add_prefix_for_prod(attr):
    if environment == "production":
        return f"{SCHEMA}.{attr}"
    else:
        return attr



# ================================== USERS MODEL ==================================
# ================================== USERS MODEL ==================================
# ================================== USERS MODEL ==================================
# ================================== USERS MODEL ==================================
# ================================== USERS MODEL ==================================


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    street_address = db.Column(db.String(255), nullable=False)
    wallet = db.Column(db.Numeric(10, 2), nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=False)


    # one-to-many: one user can have many reviews
    reviews_rel = db.relationship("Review", back_populates="users_rel", cascade="all, delete-orphan")

    # one-to-many: one user can have many orders
    orders_rel = db.relationship("Order", back_populates="users_rel", cascade="all, delete-orphan")

    # one-to-many: one user can have many restaurants
    restaurants_rel = db.relationship("Restaurant", back_populates="users_rel", cascade="all, delete-orphan")


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'streetAddress': self.street_address,
            "wallet": self.wallet,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }

    def pick_wallet(self):
        return {
            "wallet": self.wallet
        }



# ================================ RESTAURANT MODEL ================================
# ================================ RESTAURANT MODEL ================================
# ================================ RESTAURANT MODEL ================================
# ================================ RESTAURANT MODEL ================================

class RestaurantCategory(enum.Enum):
    Mexican = "Mexican"
    Indian = "Indian"
    Japanese = "Japanese"
    Bistro = "Bistro"
    French = "French"
    Italian = "Italian"
    Thai = "Thai"
    Fast_Food = "Fast_Food"
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
    street_address = db.Column(db.String(255), nullable=False)
    category = db.Column(db.Enum(RestaurantCategory), nullable=False)
    price_range = db.Column(db.Integer, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    image_url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=False)

    #Foreign Key relationship defined below

    #one-to-many: one restaurant can have many reviews
    reviews_rel = db.relationship("Review", back_populates="restaurants_rel", cascade="all, delete-orphan")

    #many-to-one: one user can own many restaurants
    users_rel = db.relationship("User", back_populates="restaurants_rel")

    #one-to-many: one restaurant can have many orders
    orders_rel = db.relationship("Order", back_populates="restaurants_rel", cascade="all, delete-orphan")

    #one-to-many: one restaurant can have many menu-items
    menu_items_rel = db.relationship("MenuItem", back_populates="restaurants_rel", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "streetAddress": self.street_address,
            "category": str(self.category).split(".")[1],
            "priceRange": self.price_range,
            "ownerId": self.owner_id,
            "imageUrl": self.image_url,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }


# =================================== REVIEW MENU ===================================
# =================================== REVIEW MENU ===================================
# =================================== REVIEW MENU ===================================
# =================================== REVIEW MENU ===================================


class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("restaurants.id")), nullable=False)
    review_text = db.Column(db.String(800), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=False)

    # one-to-many: one user can have many reviews
    users_rel = db.relationship("User", back_populates="reviews_rel")

    # one-to-many: one restaurant can have many reviews
    restaurants_rel = db.relationship("Restaurant", back_populates="reviews_rel")

    def to_dict(self):
      user_name = User.query.get(self.user_id)
      user_data = user_name.to_dict()
      return {
          'id': self.id,
          'userId': self.user_id,
          'restaurantId': self.restaurant_id,
          'reviewText': self.review_text,
          'stars': self.stars,
          "createdAt": self.created_at,
          "updatedAt": self.updated_at,
          "user": user_data
      }


# ================================= MENU_ITEM MODEL =================================
# ================================= MENU_ITEM MODEL =================================
# ================================= MENU_ITEM MODEL =================================
# ================================= MENU_ITEM MODEL =================================


class MenuItemEnum(enum.Enum):
    appetizer = "appetizer"
    entree = "entree"
    dessert = "dessert"
    beverage = "beverage"

    def to_list():
        return ["appetizer", "entree", "dessert", "beverage"]

class MenuItem(db.Model):
    __tablename__ = "menu_items"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("restaurants.id")), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    type = db.Column(db.Enum(MenuItemEnum), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(255))
    image_url = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=False)

    # one-to-many: one restaurant can have many menu_items
    restaurants_rel = db.relationship("Restaurant", back_populates="menu_items_rel")

    def to_dict(self):
        return {
            "id": self.id,
            "restaurantId": self.restaurant_id,
            "name": self.name,
            # "type": str(self.type).split(".")[1],
            "type": str(self.type),
            "price": self.price,
            "description": self.description,
            "imageUrl": self.image_url,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at
        }


# ================================== ORDER MODEL ==================================
# ================================== ORDER MODEL ==================================
# ================================== ORDER MODEL ==================================
# ================================== ORDER MODEL ==================================


class Order(db.Model):
    __tablename__ = 'orders'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    menu_items = db.Column(db.String(255), nullable=False)
    total_cost = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("restaurants.id")), nullable=False)
    created_at = db.Column(db.Date, nullable=False)

    # one-to-many: one user can have many orders
    users_rel = db.relationship("User", back_populates="orders_rel")

    # one-to-many: one restaurant can have many orders
    restaurants_rel = db.relationship("Restaurant", back_populates="orders_rel")

    # @menu_items.setter
    # def parse_menu_items(self, menuItems):
    #     #parse the json object containing the menu items
    #     pass

    def to_dict(self):
        menu_items_ids = [int(id) for id in self.menu_items.split(",")]

        menu_items_data = [MenuItem.query.get(id).to_dict() for id in menu_items_ids]

        # menu_items_query = MenuItem.query.filter(MenuItem.id.in_(menu_items_ids)).all()
        # print("********** menu_items_query: ", menu_items_query)
        # menu_items_data = [item.to_dict() for item in menu_items_query]

        return {
            'id': self.id,
            'menuItems': self.menu_items,
            'totalCost': self.total_cost,
            'userId': self.user_id,
            'restaurantId': self.restaurant_id,
            'createdAt': self.created_at,
            'menuItems': menu_items_data
        }
