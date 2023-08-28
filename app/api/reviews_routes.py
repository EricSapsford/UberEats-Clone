from flask import Blueprint, request
from ..models.db import db, User, Restaurant, MenuItem, Review, Order
from flask_login import login_required, current_user
from ..forms.review_form import ReviewForm
from ..forms.review_form import ReviewForm
import datetime

review_routes = Blueprint("reviews", __name__)

@review_routes.route("/<int:id>/delete", methods=["DELETE"])
@login_required
def delete_review(id):
    review = Review.query.filter(Review.user_id == current_user.id).get(id)

    if review:
      db.session.delete(review)
      db.session.commit()
    else:
      return {"message": "Review couldn't be found"}, 404
