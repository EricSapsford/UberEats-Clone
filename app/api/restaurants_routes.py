from flask import Blueprint, request
from ..models.db import db, User, Restaurant, MenuItem, Review, Order
from ..forms.menu_item_form import MenuItemForm
from ..forms.restaurant_form import RestaurantForm
from ..forms.review_form import ReviewForm
from flask_login import login_required, current_user
import datetime
import json

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

### Get all Restaurants by category: GET /api/restaurants/category/:category
@restaurant_routes.route("/category/<string:category>")
def get_restaurants_by_category(category):
    restaurants = Restaurant.query.filter(Restaurant.category == category).filter(MenuItem.restaurant_id == Restaurant.id).all()
    res = {"restaurants": [rest.to_dict() for rest in restaurants]}
    return res

### Get all Restaurants by current user: GET /api/restaurants/user
@restaurant_routes.route("/current")
@login_required
def get_restaurants_by_current_user():
    restaurants = Restaurant.query.filter(Restaurant.owner_id == current_user.id).all()
    res = {"restaurants": [rest.to_dict() for rest in restaurants]}
    return res

### Get details of one restaurant: GET /api/restaurants/:restaurant_id
@restaurant_routes.route('/<int:id>', methods=['GET'])
def get_one_restaurant(id):
    """
    Gets details of one restaurant
    """
    restaurant = Restaurant.query.get(id)
    return { "restaurant": restaurant.to_dict() }

### Get all menu items for rest: GET /api/restaurants/:restaurant_id/menu
@restaurant_routes.route('/<int:id>/menu', methods=['GET'])
def get_all_menu_items_for_rest(id):
    """
    Gets all menu items for a restaurant
    """
    menu_items = MenuItem.query.filter(MenuItem.restaurant_id == id).all()
    return { "menu_items": [menu_item.to_dict() for menu_item in menu_items] }

### Create menu item for rest: POST /api/restaurants/:restaurant_id/menu/new
@restaurant_routes.route('/<int:id>/menu/new', methods=['POST'])
@login_required
def create_menu_item_for_rest(id):
    """
    Creates a menu item for a restaurant
    """
    form = MenuItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_item = MenuItem(
            restaurant_id = id,
            name = form.data['name'],
            type = form.data['type'],
            price = form.data['price'],
            description = form.data['description'],
            image_url = form.data['image_url'],
            created_at = datetime.datetime.now(),
            updated_at = datetime.datetime.now()
        )
        db.session.add(new_item)
        db.session.commit()
        res = new_item.to_dict()
        # res = json.dumps(new_item.to_dict(), indent = 2)
        return res
    if form.errors:
        return { "errors": form.errors }, 400

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
            street_address = form.data["street_address"],
            category = form.data["category"],
            price_range = form.data["price_range"],
            owner_id = current_user.id,
            image_url = form.data["image_url"],
            created_at=datetime.datetime.now(),
            updated_at=datetime.datetime.now()
        )
        db.session.add(new_restaurant)
        db.session.commit()
        return { "restaurant": new_restaurant.to_dict() }
    return {"errors": validation_errors_to_error_messages(form.errors)}
    # print("**** in create_restaurant, form.errors ****", form.errors)
    # return {"errors": form.errors}

### Update a restaurant: PUT /api/restaurants/:restaurantId/update
@restaurant_routes.route("/<int:id>/update", methods=["PUT"])
@login_required
def update_restaurant(id):
    form = RestaurantForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # print(form.data["category"])
    # RestaurantCategory

    if form.validate_on_submit():
        restaurant_to_update = Restaurant.query.get(id)
        restaurant_to_update.name = form.data["name"]
        restaurant_to_update.street_address = form.data["street_address"]
        restaurant_to_update.category = form.data["category"]
        restaurant_to_update.price_range = form.data["price_range"]
        restaurant_to_update.image_url = form.data["image_url"]
        restaurant_to_update.updated_at=datetime.datetime.now()
        db.session.commit()
        return { "restaurant": restaurant_to_update.to_dict() }
    if form.errors:
        return { "errors": validation_errors_to_error_messages(form.errors) }

### Create a Review for a Restaurant: POST /api/restaurants/:restaurantId/reviews
@restaurant_routes.route("/<int:id>/reviews", methods=["POST"])
@login_required
def create_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    past_orders = Order.query.filter(Order.user_id == current_user.id).all()
    past_reviews = Review.query.filter(Review.user_id == current_user.id).all()
    restaurant_rev = [review for review in past_reviews if id == review.restaurant_id]
    if (len(restaurant_rev) > 0):
        return {'message':'You can only submit one review for a restaurant'}, 403
    if (not len(past_orders)):
        return {'message': 'You must have ordered from a restaurant to create a review'}, 403
    if form.validate_on_submit():
        new_review = Review(
            user_id=current_user.id,
            restaurant_id=id,
            review_text=form.data["review_text"],
            stars=form.data['stars'],
            created_at=datetime.datetime.now(),
            updated_at=datetime.datetime.now()
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    if form.errors:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 404

### Delete a restaurant: DELETE /api/restaurants/:restaurantId/delete
@restaurant_routes.route("/<int:id>/delete", methods=["DELETE"])
@login_required
def delete_restaurant(id):
    restaurant_to_delete = Restaurant.query.get(id)
    db.session.delete(restaurant_to_delete)
    db.session.commit()
    was_it_deleted = Restaurant.query.get(id)
    if was_it_deleted == None:
        res = {
        "message": "Successfully deleted restaurant",
        "id": id
        }
        return res
    else:
        return { "message": "Unable to delete"}, 400
