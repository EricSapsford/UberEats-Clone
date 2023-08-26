from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, FloatField, IntegerField, DateField
from wtforms.validators import DataRequired, Length, URL


item_types = ["appetizer", "entree", "dessert", "beverage"]

class MenuItemForm(FlaskForm):
    restaurant_id = IntegerField("Restaurant ID", validators=[DataRequired()])
    name = StringField("Name", validators=[DataRequired()])
    type = SelectField("Type", choices=item_types, validators=[DataRequired()])
    price = FloatField("Price", validators=[DataRequired()])
    description = StringField("Description", validators=[Length(min=5, max=255)])
    image_url = StringField("Image URL", validators=[DataRequired(), URL(), Length(min=1, max=255)])
    created_at = DateField("Created At", validators=[DataRequired()])
    updated_at = DateField("Updated At", validators=[DataRequired()])
