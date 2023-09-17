from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.habits import Habit
from app.models.dailies import Daily
from app.models.to_dos import ToDo
from app.models.reward import Reward
from flask_login import current_user, login_required
from datetime import datetime
from app.forms.create_habit import CreateHabitForm
from app.forms.update_habit import UpdateHabitForm
from .auth_routes import validation_errors_to_error_messages
from sqlalchemy import or_

search_routes = Blueprint('search', __name__)

@search_routes.route('/custom/<path:query>')
def get_custom_search(query):
    title_split = query.split('/')
    joined_title = " ".join(title_split)
    result = {
              "habits": None,
              "dailies": None,
              "ToDos": None,
              "Rewards": None
            }

    habit_result = {}
    daily_result = {}
    todo_result = {}
    reward_result = {}


    habits = Habit.query.filter(or_(Habit.title.ilike(f"%{joined_title}%"), Habit.notes.ilike(f"%{joined_title}%")))
    if habits:
        for habit in habits:
            habit_dict = habit.to_dict()
            habit_result[habit.id] = habit_dict


    dailies = Daily.query.filter(or_(Daily.title.ilike(f"%{joined_title}%"), Daily.notes.ilike(f"%{joined_title}%")))
    if dailies:
        for daily in dailies:
            daily_dict = daily.to_dict()
            daily_result[daily.id] = daily_dict


    todos = ToDo.query.filter(or_(ToDo.title.ilike(f"%{joined_title}%"), ToDo.notes.ilike(f"%{joined_title}%")))
    if todos:
        for task in todos:
            task_dict = task.to_dict()
            todo_result[task.id] = task_dict

    rewards = Reward.query.filter(or_(Reward.title.ilike(f"%{joined_title}%"), Reward.notes.ilike(f"%{joined_title}%")))
    if rewards:
        for reward in rewards:
            reward_dict = reward.to_dict()
            reward_result[reward.id] = reward_dict

    result["habits"] = habit_result
    result["dailies"] = daily_result
    result["ToDos"] = todo_result
    result["Rewards"] = reward_result
    return result



@search_routes.route('/<path:tags>')
def get_search_result(tags):
    tagList = tags.split('/')
    result = {
              "habits": None,
              "dailies": None,
              "ToDos": None,
              "Rewards": None
            }

    habit_result = {}
    daily_result = {}
    todo_result = {}
    reward_result = {}

    for tag in tagList:
        habits = Habit.query.filter(Habit.tags.like(f"%{tag}%"))
        if habits:
            for habit in habits:
                habit_dict = habit.to_dict()
                habit_result[habit.id] = habit_dict


        dailies = Daily.query.filter(Daily.tags.like(f"%{tag}%"))
        if dailies:
            for daily in dailies:
                daily_dict = daily.to_dict()
                daily_result[daily.id] = daily_dict


        todos = ToDo.query.filter(ToDo.tags.like(f"%{tag}%"))
        if todos:
            for task in todos:
                task_dict = task.to_dict()
                todo_result[task.id] = task_dict

        rewards = Reward.query.filter(Reward.tags.like(f"%{tag}%"))
        if rewards:
            for reward in rewards:
                reward_dict = reward.to_dict()
                reward_result[reward.id] = reward_dict

        habits_last_tag = Habit.query.filter(Habit.tags.ilike(f"%{tagList[-1]}%"))

        if habits_last_tag:
            for habit in habits_last_tag:
                habit_dict = habit.to_dict()
                habit_result[habit.id] = habit_dict


        dailies_last_tag = Daily.query.filter(Daily.tags.ilike(f"%{tag}%"))
        if dailies_last_tag:
            for daily in dailies_last_tag:
                daily_dict = daily.to_dict()
                daily_result[daily.id] = daily_dict


        todos_last_tag = ToDo.query.filter(ToDo.tags.ilike(f"%{tag}%"))
        if todos_last_tag:
            for task in todos_last_tag:
                task_dict = task.to_dict()
                todo_result[task.id] = task_dict

        rewards_last_tag = ToDo.query.filter(ToDo.tags.ilike(f"%{tag}%"))
        if rewards_last_tag:
            for reward in rewards_last_tag:
                reward_dict = reward.to_dict()
                reward_result[reward.id] = reward_dict

    result["habits"] = habit_result
    result["dailies"] = daily_result
    result["ToDos"] = todo_result
    result["Rewards"] = reward_result
    return result
