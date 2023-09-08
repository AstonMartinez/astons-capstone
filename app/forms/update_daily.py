from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class UpdateDailyForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    notes = StringField("notes")
    difficulty = StringField("difficulty", validators=[DataRequired()])
    tags = StringField("tags")
