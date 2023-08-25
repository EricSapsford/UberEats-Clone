from .db import db, environment, SCHEMA
import enum
from .restaurant import Restaurant

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
    restaurant_id = db.Column(db.Integer, db.ForeignKey("restaurants.id"), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    type = db.Column(db.db.Enum(MenuItemEnum), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(255))
    image_url = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.Date)
    updated_at = db.Column(db.Date)

    # one-to-many: one restaurant can have many menu_items
    restaurants_rel = db.relationship("Restaurant", back_populates="menu_items_rel")
