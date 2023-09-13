from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class FeatureRequestForm(FlaskForm):
    email = StringField("Email", validators=[DataRequired()])
    category = StringField("Category", validators=[DataRequired()])
    response = StringField("Response", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
