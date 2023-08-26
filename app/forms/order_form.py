from flask_wtf import FlaskForm
from wtforms import StringField, FloatField
from wtforms.validators import DataRequired, Length


class OrderForm(FlaskForm):
    menu_items = StringField("Menu Items", validators=[DataRequired(), Length(max=255)])
    total_cost = FloatField("Total Cost", validators=[DataRequired()])
