from flask import Blueprint, request
from ..models.db import db, User, Restaurant, MenuItem, Review, Order
from flask_login import login_required, current_user
from ..forms.restaurant_form import RestaurantForm
from ..forms.review_form import ReviewForm

restaurant_routes = Blueprint("restaurants", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

### Get all Restaurants with at least one Menu Item: GET /api/restaurants
@restaurant_routes.route("/")
def get_all_rests_with_one():
    restaurants = Restaurant.query.filter(MenuItem.restaurant_id == Restaurant.id).all()
    # restaurants = Restaurant.query.all()
    # for rest in restaurants:
    #     mus = MenuItem.query.filter(MenuItem.restaurant_id == rest.id).all()
    #     res1 = [mu.to_dict() for mu in mus]
    #     print(res1)
    # print(restaurants)
    # res = [{"body": rest.to_dict(), "mu":res1 } for rest in restaurants]
    res = {"restaurants": [rest.to_dict() for rest in restaurants]}
    return res

### Get all Restaurants by Category: GET /api/restaurants/:category
@restaurant_routes.route("/<string:catagory>")
def get_restaurants_by_catagory(catagory):
    restaurants = Restaurant.query.filter(Restaurant.category == catagory).all()
    res = {"restaurants": [rest.to_dict() for rest in restaurants]}
    return res


### Get reviews for a restaurant by id: GET /api/restaurants/:restaurantId/reviews
@restaurant_routes.route("/<int:id>/reviews", methods=["GET"])
def get_reviews(id):
    reviews = Review.query.filter(Review.restaurant_id == id).all()
    res = {"reviews": [rev.to_dict() for rev in reviews]}
    return res

### Create a restaurant: POST /api/restaurants/new
@restaurant_routes.route("/new", methods=["POST"])
@login_required
def create_restaurant():
    form = RestaurantForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_restaurant = Restaurant(
            name = form.data["name"],
            street_address = form.data["address"],
            category = form.data["category"],
            price_range = form.data["price_range"],
            owner_id = current_user.id,
            image_url = form.data["image_url"]
        )
        db.session.add(new_restaurant)
        db.session.commit()
        return new_restaurant.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}

# @restaurant_routes.route("/<int:id>/reviews", methods=["POST"])
# @login_required
# def create_review(id):
#     form = ReviewForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     past_orders = Order.query.filter(Order.user_id == current_user.id).all()
#     if (not len(past_orders)):
#         return {"message": "You must have ordered from a restaurant to create a review"}, 403
#     if form.validate_on_submit():
#         new_review = Review(
#             user_id=current_user.id,
#             restaurant_id=id,
#             review_text=form.data["review_text"],
#             stars=form.data["stars"]
#         )
#         db.session.add(new_review)
#         db.session.commit()
#         return new_review.to_dict()
#     if form.errors:
#         return {"errors": form.errors}, 404
