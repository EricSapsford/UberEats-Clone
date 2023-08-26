from app.models.db import db, Order, environment, SCHEMA
from sqlalchemy.sql import text
import datetime
from .data import past_orders

def seed_orders():

    for order in past_orders:
        new_order = Order(
            user_id = order["user_id"],
            restaurant_id = order["restaurant_id"],
            total_cost = order["total_cost"],
            menu_items = order["menu_items"],
            created_at = order["created_at"]
        )
        db.session.add(new_order)

    db.session.commit()


def undo_orders():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.orders RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM orders"))

    db.session.commit()
