from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField
from wtforms.validators import DataRequired, Length


class OrderForm(FlaskForm):
    menu_items = StringField("Menu Items", validators=[DataRequired(), Length(max=800)])
    total_cost = StringField("Total Cost", validators=[DataRequired()])
    user_id = IntegerField("User ID", validators=[DataRequired()])
    restaurant_id = IntegerField("Restaurant ID", validators=[DataRequired()])
    created_at = DateField("Created At", validators=[DataRequired()])
