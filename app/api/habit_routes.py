from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.habits import Habit
from flask_login import current_user, login_required
from datetime import datetime

habit_routes = Blueprint('habits', __name__)

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
