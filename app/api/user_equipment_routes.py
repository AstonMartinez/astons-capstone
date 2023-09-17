from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.user import User
from app.models.user_equipment import UserEquipment
from flask_login import current_user, login_required
from datetime import datetime
from .auth_routes import validation_errors_to_error_messages

user_equipment_routes = Blueprint('user_equipment', __name__)

@user_equipment_routes.route('/<int:id>/buy', methods=["POST"])
def new_user_equipment(id):
    curr_user_id = current_user.id
    item_id = id

    new_user_equipment_item = UserEquipment(
        user_id=curr_user_id,
        equipment_id=item_id
    )

    new_ue_dict = new_user_equipment_item.to_dict()

    db.session.add(new_user_equipment_item)
    db.session.commit()
    return new_ue_dict
