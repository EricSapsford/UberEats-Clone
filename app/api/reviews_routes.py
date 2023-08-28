from flask import Blueprint, request
from ..models.db import db, User, Restaurant, MenuItem, Review, Order
from flask_login import login_required, current_user
from ..forms.review_form import ReviewForm
from ..forms.review_form import ReviewForm
import datetime

restaurant_routes = Blueprint("restaurants", __name__)



# @restaurant_routes.route("/<int:id>/reviews", methods=["GET"])
# def get_reviews(id):
#     reviews = Review.query.filter(Review.restaurant_id == id).all()
#     res = {"reviews": [rev.to_dict() for rev in reviews]}
#     return res


# @restaurant_routes.route("/<int:id>/reviews", methods=["POST"])
# @login_required
# def create_review(id):
#     form = ReviewForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     past_orders = Order.query.filter(Order.user_id == current_user.id).all()
#     if (not len(past_orders)):
#         return {'message': 'You must have ordered from a restaurant to create a review'}, 403
#     if form.validate_on_submit():
#         new_review = Review(
#             user_id=current_user.id,
#             restaurant_id=id,
#             review_text=form.data["review_text"],
#             stars=form.data['stars']
#         )
#         db.session.add(new_review)
#         db.session.commit()
#         return new_review.to_dict()
#     if form.errors:
#         return {"errors": form.errors}, 404


# @restaurant_routes.route("/<int:id>/reviews", methods=["GET"])
# def get_reviews(id):
#     reviews = Review.query.filter(Review.restaurant_id == id).all()
#     res = {"reviews": [rev.to_dict() for rev in reviews]}
#     return res

# @restaurant_routes.route("/<int:id>/reviews", methods=["POST"])
# @login_required
# def create_review(id):
#     form = ReviewForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     past_orders = Order.query.filter(Order.user_id == current_user.id).all()
#     past_reviews = Review.query.filter(Review.user_id == current_user.id).all()
#     if (len(past_reviews)):
#         return {'message':'You can only submit one review for a restaurant'}, 403
#     if (not len(past_orders)):
#         return {'message': 'You must have ordered from a restaurant to create a review'}, 403
#     if form.validate_on_submit():
#         new_review = Review(
#             user_id=current_user.id,
#             restaurant_id=id,
#             review_text=form.data["review_text"],
#             stars=form.data['stars'],
#             created_at=datetime.datetime.now(),
#             updated_at=datetime.datetime.now()
#         )
#         db.session.add(new_review)
#         db.session.commit()
#         return new_review.to_dict()
#     if form.errors:
#         return {"errors": form.errors}, 404