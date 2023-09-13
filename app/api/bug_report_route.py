from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.dailies import Daily
from app.models.bug_report import BugReport
from app.forms.bug_report_form import BugReportForm
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages

bug_routes = Blueprint('bugs', __name__)

@bug_routes.route('/new', methods=["POST"])
def submit_report():
    form = BugReportForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # print("HITTING VALIDATION")
        user_email = request.json["email"]
        bug_description = request.json["bug_description"]

        new_report = BugReport(
            user_email=user_email,
            bug_description=bug_description,
            status="unresolved"
        )

        db.session.add(new_report)
        db.session.commit()
        return new_report.to_dict()
    print(form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}

@bug_routes.route('/<int:id>/status', methods=["PUT"])
def mark_as_resolved(id):
    report = BugReport.query.get(id)
    report.status = "resolved"
    updated_report = report
    updated_report_dict = updated_report.to_dict()

    db.session.commit()
    return updated_report_dict
