from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.dailies import Daily
from flask_login import current_user, login_required
from datetime import datetime
from app.forms.create_daily import CreateDailyForm
from app.forms.update_daily import UpdateDailyForm
from .auth_routes import validation_errors_to_error_messages

dailies_routes = Blueprint('dailies', __name__)
# session = db.session

@dailies_routes.route('/user-dailies')
def get_user_dailies():
    user_dailies = Daily.query.filter(Daily.user_id == current_user.id)
    result = {}
    if user_dailies:
        for daily in user_dailies:
            daily_dict = daily.to_dict()
            result[daily.id] = daily_dict
    return result

@dailies_routes.route('/new', methods=["POST"])
def create_daily():
    form = CreateDailyForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        user_id = current_user.id
        title = request.json["title"]
        notes = ''
        start_date = datetime.now()
        num_weeks = 1
        day_of_week = start_date.strftime("%A")
        difficulty = 'easy'
        tags = ''

        new_daily = Daily(
            user_id=user_id,
            title=title,
            notes=notes,
            difficulty=difficulty,
            start_date=start_date,
            num_weeks=num_weeks,
            day_of_week=day_of_week,
            tags=tags)

        db.session.add(new_daily)
        db.session.commit()
        return new_daily.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

@dailies_routes.route('/<int:id>/update', methods=["PUT"])
def update_daily(id):
    curr_daily = Daily.query.get(id)
    form = UpdateDailyForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    title = request.json["title"]
    notes = request.json["notes"]
    difficulty = request.json["difficulty"]
    start_date = request.json["start_date"]
    num_weeks = request.json["num_weeks"]
    day_of_week = request.json["day_of_week"]
    tags = request.json["tags"]

    if form.validate_on_submit():
        curr_daily.title = title
        curr_daily.notes = notes
        curr_daily.difficulty = difficulty
        curr_daily.start_date = start_date
        curr_daily.num_weeks = num_weeks
        curr_daily.day_of_week = day_of_week
        curr_daily.tags = tags

        updated_daily = curr_daily
        updated_daily_dict = updated_daily.to_dict()
        db.session.commit()
        return updated_daily_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}



@dailies_routes.route('/<int:id>/delete', methods=["DELETE"])
def delete_daily(id):
    curr_daily = Daily.query.get(id)
    db.session.delete(curr_daily)
    db.session.commit()
    return curr_daily.to_dict()
