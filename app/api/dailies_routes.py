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

@login_required
@dailies_routes.route('/user-dailies')
def get_user_dailies():
    user_dailies = Daily.query.filter(Daily.user_id == current_user.id)
    result = {}
    if user_dailies:
        for daily in user_dailies:
            daily_dict = daily.to_dict()
            result[daily.id] = daily_dict
    return result

@login_required
@dailies_routes.route('/new', methods=["POST"])
def create_daily():
    form = CreateDailyForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        user_id = current_user.id
        title = request.json["title"]
        notes = ''
        checklist = ''
        start_date = datetime.now()
        repeats = "weekly"
        num_repeats = 1
        day_of_repeat = start_date.strftime("%A")
        difficulty = 'easy'
        tags = ''
        status = 'due'

        new_daily = Daily(
            user_id=user_id,
            title=title,
            notes=notes,
            checklist=checklist,
            difficulty=difficulty,
            start_date=start_date,
            repeats=repeats,
            num_repeats=num_repeats,
            day_of_repeat=day_of_repeat,
            tags=tags,
            status=status)

        db.session.add(new_daily)
        db.session.commit()
        return new_daily.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

@login_required
@dailies_routes.route('/<int:id>/update', methods=["PUT"])
def update_daily(id):
    curr_daily = Daily.query.get(id)
    form = UpdateDailyForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print("""
    #       LOOK HERE
    #       """, request.json)

    title = request.json["title"]
    notes = request.json["notes"]
    checklist = request.json["checklist"]
    difficulty = request.json["difficulty"]
    start_date = request.json["start_date"]
    repeats = request.json["repeats"]
    num_repeats = request.json["num_repeats"]
    day_of_repeat = request.json["day_of_repeat"]
    count = request.json["count"]
    tags = request.json["tags"]
    status = request.json["status"]

    current_start_date = curr_daily.start_date.strftime("%d %m %Y").split()
    new_start_date = start_date.split()

    # print("""
    #       CURRENT START DATE + NEW START DATE
    #       """, current_start_date, new_start_date)

    if form.validate_on_submit():
        if current_start_date != new_start_date:
            new_day = int(new_start_date[0])
            new_month = int(new_start_date[1])
            new_year = int(new_start_date[2])
            curr_daily.start_date = datetime(new_year, new_month, new_day)

        curr_daily.title = title
        curr_daily.notes = notes
        curr_daily.checklist = checklist
        curr_daily.difficulty = difficulty
        curr_daily.count = count
        curr_daily.repeats = repeats
        curr_daily.num_repeats = num_repeats
        curr_daily.day_of_repeat = day_of_repeat
        curr_daily.tags = tags
        curr_daily.status = status

        updated_daily = curr_daily
        updated_daily_dict = updated_daily.to_dict()
        # print("""
        #   LOOOOOOOOOOOOOOK""", updated_daily_dict)
        db.session.commit()
        return updated_daily_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}


@login_required
@dailies_routes.route('/<int:id>/delete', methods=["DELETE"])
def delete_daily(id):
    curr_daily = Daily.query.get(id)
    db.session.delete(curr_daily)
    db.session.commit()
    return curr_daily.to_dict()

@dailies_routes.route('/<int:id>')
def get_one_daily(id):
    daily = Daily.query.get(id)
    return daily.to_dict()

@dailies_routes.route('/<int:id>/update-count', methods=["PUT"])
def update_daily_count(id):
    daily = Daily.query.get(id)

    daily.count = request.json["count"]
    db.session.commit()
    return daily.to_dict()
