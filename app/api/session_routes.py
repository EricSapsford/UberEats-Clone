from flask import Blueprint, request
from ..models.db import db, User
from flask_login import login_required, current_user

session_routes = Blueprint("sessions", __name__)

### Get current user: GET /api/session
@session_routes.route("/")
def get_current_user():
    return current_user.to_dict() if current_user else {"message": "No user currently logged in"}
