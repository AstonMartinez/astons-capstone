from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class BugReportForm(FlaskForm):
    email = StringField("Email", validators=[DataRequired()])
    bug_description = StringField("Description", validators=[DataRequired()])
