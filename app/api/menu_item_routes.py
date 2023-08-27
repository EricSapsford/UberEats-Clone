from flask import Blueprint, request
from ..models.db import MenuItem, db
from ..forms.menu_item_form import MenuItemForm
from flask_login import login_required

menu_item_routes = Blueprint('menu_items', __name__)

### Get menu item: GET /api/menu-items/:menu_item_id
@menu_item_routes.route('/<int:id>', methods=['GET'])
def get_menu_item(id):
    """
    Gets the details of a menu item
    """
    menu_item = MenuItem.query.get(id)
    return menu_item.to_dict()

### Update menu item: PUT /api/menu-items/update/:menu_item_id
@menu_item_routes.route('/<int:id>/update', methods=['PUT'])
@login_required
def update_menu_item(id):
    """
    Updates a menu item
    """
    form = MenuItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        item_to_update = MenuItem.query.get(id)
        item_to_update.name = form.data['name']
        item_to_update.type = form.data['type']
        item_to_update.price = form.data['price']
        item_to_update.description = form.data['description']
        item_to_update.image_url = form.data['image_url']
        # DO WE NEED SOMETHING FOR UPDATED_AT
        db.session.commit()
        return item_to_update.to_dict()
    if form.errors:
        return { "errors": form.errors }

### Delete menu item: DELETE /api/menu-items/delete/:menu_item_id
@menu_item_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_menu_item(id):
    """
    Deletes a menu item
    """
    item_to_delete = MenuItem.query.get(id)
    db.session.delete(item_to_delete)
    db.session.commit()
    return { "Successfully deleted menu item id": id }


############################## ADD TO OTHER FILES ##############################
############################## ADD TO OTHER FILES ##############################
############################## ADD TO OTHER FILES ##############################


# 1. ADDED TO app/__init__.py:
# app.register_blueprint(menu_item_routes, url_prefix='/api/menu-items')


# 2. ADDED TO app/api/restaurants_routes.py:

# ### Get details of one restaurant: GET /api/restaurants/:restaurant_id
# @restaurant_routes.route('/<int:id>', methods=['GET'])
# def get_one_restaurant(id):
#     """
#     Gets details of one restaurant
#     """
#     restaurant = Restaurant.query.get(id)
#     return { "restaurant": restaurant }

# ### Get all menu items for rest: GET /api/restaurants/:restaurant_id/menu
# @restaurant_routes.route('/<int:id>/menu', methods=['GET'])
# def get_all_menu_items_for_rest(id):
#     """
#     Gets all menu items for a restaurant
#     """
#     menu_items = MenuItem.query.filter(MenuItem.restaurant_id == id).all()
#     return { "menu_items": [menu_item.to_dict() for menu_item in menu_items] }

# ### Create menu item for rest: POST /api/restaurants/:restaurant_id/menu
# @restaurant_routes.route('/<int:id>/menu', methods=['POST'])
# @login_required
# def create_menu_item_for_rest(id):
#     """
#     Creates a menu item for a restaurant
#     """
#     form = MenuItemForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         new_item = MenuItem(
#             restaurant_id = id,
#             name = form.data['name'],
#             type = form.data['type'],
#             price = form.data['price'],
#             description = form.data['description'],
#             image_url = form.data['image_url']
#         )
#         db.session.add(new_item)
#         db.session.commit()
#         return new_item.to_dict()
#     if form.errors:
#         return { "errors": form.errors }
