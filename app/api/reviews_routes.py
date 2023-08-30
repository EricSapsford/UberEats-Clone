from flask import Blueprint
from ..models.db import db,Review 
from flask_login import login_required, current_user

review_routes = Blueprint("reviews", __name__)

@review_routes.route("/<int:id>/delete", methods=["DELETE"])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    if review and current_user.id == review.user_id:
      db.session.delete(review)
      db.session.commit()
      return {"message": "success"}, 200
    else:
      return {"message": "Review couldn't be found"}, 404
