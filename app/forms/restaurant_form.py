from flask_wtf import FlaskForm
from wtforms import DateField, StringField, RadioField, IntegerField
from wtforms.validators import DataRequired, Length, URL

restaurant_categories = [
            "Mexican",
            "Indian",
            "Japanese",
            "Bistro",
            "French",
            "Italian",
            "Thai",
            "Fast Food",
            "Mediterranean",
            "Vegetarian"
        ]

class RestaurantForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired(), Length(min=1, max=255)])
    street_address = StringField("Street Address", validators=[DataRequired(), Length(min=5, max=255)])
    category = RadioField("Category", choices=restaurant_categories, validators=[DataRequired()])
    price_range = IntegerField("Price Range", validators=[DataRequired()])
    owner_id = IntegerField("Owner ID", validators=[DataRequired()])
    image_url = StringField("Image URL", validators=[DataRequired(), URL()])
    created_at = DateField("Created At", validators=[DataRequired()])
    updated_at = DateField("Updated At", validators=[DataRequired()])
