from app.models.db import db, Restaurant, environment, SCHEMA
from sqlalchemy.sql import text
import datetime
from .data import restaurants

def seed_restaurants():

    for rest in restaurants:
        new_rest = Restaurant(
            name = rest["name"],
            street_address = rest["address"],
            category = rest["category"],
            price_range = rest["price_range"],
            owner_id = rest["owner_id"],
            image_url = rest["image_url"],
            created_at=rest["created_at"],
            updated_at=rest["updated_at"]
        )
        db.session.add(new_rest)

    db.session.commit()



def undo_restaurants():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.restaurants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM restaurants"))

    db.session.commit()
