from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db
from app.models.avatar import Avatar

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    user_dict = user.to_dict()

    avatar_to_return = Avatar.query.filter(Avatar.user_id == user_dict['id'])
    avatar_dict = avatar_to_return[0].to_dict()

    user_dict['avatar'] = avatar_dict
    return user.to_dict()


@user_routes.route('/update-user-stats', methods=["PUT"])
def update_user_stats():
    user_id = current_user.id
    curr_user = User.query.get(user_id)
    print(request.json)
    if request.json["gold"]:
        curr_user.gold = request.json["gold"]

    if request.json["health"]:
        curr_user.health = request.json["health"]

    if request.json["experience_points"]:
        curr_user.experience_points = request.json["experience_points"]

    if request.json["level"]:
        curr_user.level = request.json["level"]

    db.session.commit()
    updated_user = curr_user
    return updated_user.to_dict()
