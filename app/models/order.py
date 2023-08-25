from .db import db, environment, SCHEMA


class Order(db.Model):
    __tablename__ = 'orders'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    menu_items = db.Column(db.String(800), nullable=False)
    total_cost = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey("restaurants.id"), nullable=False)
    created_at = db.Column(db.Date, nullable=False)

    # one-to-many: one user can have many orders
    users_rel = db.Relationship("User", back_populates="orders_rel")

    # one-to-many: one restaurant can have many orders
    restaurants_rel = db.Relationship("Restaurant", back_populates="orders_rel")

    @menu_items.setter
    def parse_menu_items(self, menuItems):
        #parse the json object containing the menu items
        pass

    def to_dict(self):
        return {
            'id': self.id,
            'menuItems': self.menu_items,
            'totalCost': self.total_cost,
            'userId': self.user_id,
            'restaurantId': self.restaurant_id,
            'createdAt': self.created_at
        }
