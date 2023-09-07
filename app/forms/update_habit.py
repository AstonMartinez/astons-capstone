from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class UpdateHabitForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    notes = StringField("notes")
    type = StringField("type")
    difficulty = StringField("difficulty", validators=[DataRequired()])
    tags = StringField("tags")
