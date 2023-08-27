from flask import Blueprint, request
from ..models.db import db, User, Restaurant, MenuItem, Order
from flask_login import login_required, current_user
from ..forms.order_form import OrderForm

orders_routes = Blueprint("orders", __name__)


@current_user
@orders_routes.route("/", methods=["GET"])
def get_past_orders():
    orders = Order.query.filter(Order.user_id == current_user.id).all()
    return { "past_orders": [order.to_dict() for order in orders] }


@current_user
@orders_routes.route("/", methods=["POST"])
def create_order():
    form = OrderForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_order = Order(
            user_id = current_user.id,
            menu_items = form.data["menu_items"],
            total_cost = form.data["total_cost"],
            # restaurant_id = form.data["restaurant_id"]
            created_at = form.data["created_at"]
        )
        db.session.add(new_order)
        db.session.commit()
    if form.errors:
        return { "errors": form.errors }
    pass
