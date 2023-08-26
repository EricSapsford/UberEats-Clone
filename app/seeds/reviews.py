from app.models.db import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
import datetime
from .data import reviews


def seed_reviews():

    for review in reviews:
        new_review = Review(
            user_id = review["user_id"],
            restaurant_id = review["restaurant_id"],
            review_text = review["review_text"],
            stars = review["stars"],
            created_at = review["created_at"],
            updated_at = review["updated_at"],
        )
        db.session.add(new_review)

    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
