from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField
from wtforms.validators import DataRequired, Length


class ReviewForm(FlaskForm):
    user_id = IntegerField("User ID", validators=[DataRequired()])
    restaurant_id = IntegerField("Restaurant ID", validators=[DataRequired()])
    review_text = StringField("Review", validators=[DataRequired(), Length(min=5, max=800)])
    stars = IntegerField("Star Rating", validators=[DataRequired()])
    created_at = DateField("Created At", validators=[DataRequired()])
    updated_at = DateField("Updated At", validators=[DataRequired()])
