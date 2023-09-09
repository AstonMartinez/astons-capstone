from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.habits import Habit
from flask_login import current_user, login_required
from datetime import datetime
from app.forms.create_habit import CreateHabitForm
from app.forms.update_habit import UpdateHabitForm
from .auth_routes import validation_errors_to_error_messages

habit_routes = Blueprint('habits', __name__)
# session = db.session

@habit_routes.route('/user-habits')
def get_user_habits():
    user_habits = Habit.query.filter(Habit.user_id == current_user.id)
    result = {}
    if user_habits:
        for habit in user_habits:
            # print(habit.id)
            habit_dict = habit.to_dict()
            result[habit.id] = habit_dict
    return result

@habit_routes.route('/new', methods=["POST"])
def create_habit():
    form = CreateHabitForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # print(request.json)
        user_id = current_user.id
        title = request.json["title"]
        notes = ''
        type = ''
        difficulty = 'easy'
        tags = ''

        new_habit = Habit(
            user_id=user_id,
            title=title,
            notes=notes,
            type=type,
            difficulty=difficulty,
            tags=tags
        )

        db.session.add(new_habit)
        db.session.commit()
        return new_habit.to_dict()

@habit_routes.route('/<int:id>/update', methods=["PUT"])
def update_habit(id):
    curr_habit = Habit.query.get(id)
    form = UpdateHabitForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    title = request.json["title"]
    notes = request.json["notes"]
    type = request.json["type"]
    difficulty = request.json["difficulty"]
    tags = request.json["tags"]

    if form.validate_on_submit():
        curr_habit.title = title
        curr_habit.notes = notes
        curr_habit.type = type
        curr_habit.difficulty = difficulty
        curr_habit.tags = tags

        updated_habit = curr_habit
        updated_habit_dict = updated_habit.to_dict()
        db.session.commit()
        return updated_habit_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}



@habit_routes.route('/<int:id>/delete', methods=["DELETE"])
def delete_habit(id):
    curr_habit = Habit.query.get(id)
    db.session.delete(curr_habit)
    db.session.commit()
    return curr_habit.to_dict()

@habit_routes.route('/<int:id>/change-habit-type', methods=["PUT"])
def change_habit_type(id):
    curr_habit = Habit.query.get(id)
    new_type = request.json["type"]

    curr_habit.type = new_type
    updated_habit = curr_habit
    updated_habit_dict = updated_habit.to_dict()
    db.session.commit()
    return updated_habit_dict
