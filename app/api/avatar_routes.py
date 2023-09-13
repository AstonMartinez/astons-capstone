from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.avatar import Avatar
from flask_login import current_user, login_required
from datetime import datetime
from app.forms.create_habit import CreateHabitForm
from app.forms.update_habit import UpdateHabitForm
from .auth_routes import validation_errors_to_error_messages
from sqlalchemy import or_

avatar_routes = Blueprint('avatar', __name__)

@avatar_routes.route('/current')
def get_user_avatar():
    avatar = current_user.avatar
    # print("STEP 1 **************: ", avatar)
    avatar_id = avatar[0].id
    queried_avatar = Avatar.query.get(avatar_id)
    # print("STEP 2 **************: ", queried_avatar)
    avatar_dict = queried_avatar.to_dict()
    # print("STEP 3 **************: ", avatar_dict)
    # user_avatar = Avatar.query.filter(Avatar.user_id == user_id)
    # if user_avatar:
    #     # avatar_dict = user_avatar.to_dict()
    #     print("RESULT *******************", user_avatar['user_id'])
    #     # return avatar_dict
    return avatar_dict

@avatar_routes.route('/update', methods=["PUT"])
def update_user_avatar():
    avatar = current_user.avatar
    avatar_id = avatar[0].id
    queried_avatar = Avatar.query.get(avatar_id)

    background = request.json["background"]
    skin = request.json["skin"]
    shirt = request.json["shirt"]
    bangs = request.json["bangs"]

    queried_avatar.background = background
    queried_avatar.skin = skin
    queried_avatar.shirt = shirt
    queried_avatar.bangs = bangs

    db.session.commit()

    updated_avatar = queried_avatar
    updated_avatar_dict = updated_avatar.to_dict()
    return updated_avatar_dict
