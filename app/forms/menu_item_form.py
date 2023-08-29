from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, FloatField, TextAreaField
from wtforms.validators import DataRequired, Length, URL


item_types = ["appetizer", "entree", "dessert", "beverage"]

class MenuItemForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    type = SelectField("Type", choices=item_types, validators=[DataRequired()])
    price = FloatField("Price", validators=[DataRequired()])
    description = TextAreaField("Description") # removed validators, because they make field required: validators=[Length(min=5, max=255)]
    image_url = StringField("Image URL", validators=[DataRequired(), URL(), Length(min=1, max=255)])
