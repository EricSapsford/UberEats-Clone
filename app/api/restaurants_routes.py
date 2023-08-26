from flask import Blueprint, request
from ..models.db import db, User, Restaurant, MenuItem
from flask_login import login_required, current_user
# from ..forms.restaurant_form imprt RestaurantForm

restaurant_routes = Blueprint("restaurants", __name__)

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
    res = [rest.to_dict() for rest in restaurants]
    return res
