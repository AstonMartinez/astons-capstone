from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db
from app.models.avatar import Avatar
from app.models.user_equipment import UserEquipment
from app.models.equipment import EquipmentItem

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

    curr_user.gold = request.json["gold"]
    curr_user.health = request.json["health"]
    curr_user.experience_points = request.json["experience_points"]
    curr_user.level = request.json["level"]

    updated_user = curr_user
    db.session.commit()
    return updated_user.to_dict()

@user_routes.route('/inventory')
def get_user_inventory():
    curr_user_equip_items = UserEquipment.query.filter(UserEquipment.user_id == current_user.id)
    result = {}

    if curr_user_equip_items:
        for item in curr_user_equip_items:
            equipment_item = EquipmentItem.query.get(item.equipment_id)
            if equipment_item:

                equipment_item_dict = equipment_item.to_dict()
                result[equipment_item_dict['id']] = equipment_item_dict
    return result
