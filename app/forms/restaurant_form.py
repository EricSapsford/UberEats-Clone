from flask_wtf import FlaskForm
from wtforms import StringField, RadioField, IntegerField
from wtforms.validators import DataRequired, Length, URL, NumberRange

restaurant_categories = [
            "Mexican",
            "Indian",
            "Japanese",
            "Bistro",
            "French",
            "Italian",
            "Thai",
            "Fast_Food",
            "Mediterranean",
            "Vegetarian"
        ]

class RestaurantForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired(), Length(min=1, max=255)])
    street_address = StringField("Street Address", validators=[DataRequired(), Length(min=5, max=255)])
    category = RadioField("Category", choices=restaurant_categories, validators=[DataRequired()])
    price_range = IntegerField("Price Range", validators=[DataRequired(), NumberRange(min=1, max=4)])
    image_url = StringField("Image URL", validators=[DataRequired(), URL()])
