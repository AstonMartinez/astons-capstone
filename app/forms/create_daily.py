from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

def check_title_length(form, field):
    # Checking if username is already in use
    title = field.data
    if len(title) > 255:
        raise ValidationError('Habit titles must be 255 characters or less.')

class CreateDailyForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired(), check_title_length])
