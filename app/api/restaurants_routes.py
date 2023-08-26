from flask import Blueprint, request
from ..models.db import db, User, Restaurant, MenuItem
from flask_login import login_required, current_user
# from ..forms.restaurant_form imprt RestaurantForm

restaurant_routes = Blueprint("restaurants", __name__)

### Get all Restaurants with at least one Menu Item: GET /api/restaurants
@restaurant_routes.route("/")
def get_all_rests_with_one():
    restaurants = Restaurant.query.all()
    res = [rest.to_dict() for rest in restaurants]
    print(res)
    return res
