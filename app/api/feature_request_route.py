from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.feature_request import FeatureRequest
from app.forms.feature_request_form import FeatureRequestForm
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages

feature_routes = Blueprint('features', __name__)

@feature_routes.route('/new', methods=["POST"])
def submit_feature_request():
    form = FeatureRequestForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        email = request.json["email"]
        category = request.json["category"]
        response = request.json["response"]
        description = request.json["description"]

        new_request = FeatureRequest(
            email=email,
            category=category,
            response=response,
            description=description
        )

        db.session.add(new_request)
        db.session.commit()
        return new_request.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}
