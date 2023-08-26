from app.models.db import db, MenuItem, environment, SCHEMA
from sqlalchemy.sql import text
import datetime
from .data import menu_items

# Adds demo menu_items
def seed_menu_items():

    for menu_item in menu_items:
        new_menu_item = MenuItem(
            restaurant_id = menu_item["restaurant_id"],
            name = menu_item["name"],
            type = menu_item["type"],
            price = menu_item["price"],
            description=menu_item["description"],
            image_url=menu_item["image_url"],
            created_at=menu_item["created_at"],
            updated_at=menu_item["updated_at"]
        )
        db.session.add(new_menu_item)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the menu_items table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_menu_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.menu_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM menu_items"))

    db.session.commit()
