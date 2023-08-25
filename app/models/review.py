# from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA
from .user import User
from .restaurant import Restaurant

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey("restaurants.id"), nullable=False)
    review_text = db.Column(db.String(800), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=False)

    # one-to-many: one user can have many reviews
    users_rel = db.relationship("User", back_populates="reviews_rel")

    # one-to-many: one restaurant can have many reviews
    restaurants_rel = db.relationship("Restaurant", back_populates="reviews_rel")

    def to_dict(self):
      return {
          'id': self.id,
          'userId': self.user_id,
          'restaurantId': self.restaurant_id,
          'reviewText': self.review_text,
          'stars': self.stars,
          "createdAt": self.created_at,
          "updatedAt": self.updated_at
      }
