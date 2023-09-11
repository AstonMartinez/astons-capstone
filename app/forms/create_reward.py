from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CreateRewardForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    notes = StringField("Notes")
    cost = IntegerField("Cost", validators=[DataRequired()])
    tags = StringField("Tags")
