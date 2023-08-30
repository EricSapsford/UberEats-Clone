from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, IntegerField
from wtforms.validators import DataRequired, Length


class OrderForm(FlaskForm):
    menu_items = StringField("Menu Items", validators=[DataRequired(), Length(max=255)])
    total_cost = FloatField("Total Cost", validators=[DataRequired()])
    restaurant_id = IntegerField("Restaurant ID", validators=[DataRequired()])
