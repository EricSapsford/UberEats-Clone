from flask import Blueprint, request
from app.models import db
from flask_login import current_user, login_required
from .aws_helpers import (
    upload_file_to_s3, get_unique_filename, remove_file_from_s3)
from ..forms.aws_forms import ImageForm
from ..models.db import db, User, Restaurant, MenuItem

images_routes = Blueprint("images", __name__)


@images_routes.route("/create", methods=["POST"])
@login_required
def upload_image():
    form = ImageForm()

    if form.validate_on_submit():
        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        url = upload["url"]
        print("**** url: ", url)
        return url
    if form.errors:
        print(form.errors)
        return {"errors": form.errors}, 400

@images_routes.route("/delete/<int:id>", methods=["DELETE"])
@login_required
def delete_image(id):
    rest_to_update = Restaurant.query.get(id)

    image_deleted = remove_file_from_s3(rest_to_update.image_url)

    if image_deleted is True:
        return {"message": "Successfully deleted"}, 200
    else:
        return {"errors": "image could not be deleted"}
