from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class UpdateToDosForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    notes = StringField("notes")
    type = StringField("type")
    difficulty = StringField("difficulty")
    tags = StringField("tags")
