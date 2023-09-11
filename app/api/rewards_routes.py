from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.reward import Reward
from flask_login import current_user, login_required
from datetime import datetime
from app.forms.create_reward import CreateRewardForm
from app.forms.update_reward import UpdateRewardForm
from .auth_routes import validation_errors_to_error_messages

rewards_routes = Blueprint('rewards', __name__)
# session = db.session

@login_required
@rewards_routes.route('/user-rewards')
def get_user_rewards():
    user_rewards = Reward.query.filter(Reward.user_id == current_user.id)
    result = {}
    if user_rewards:
        for reward in user_rewards:
            reward_dict = reward.to_dict()
            result[reward.id] = reward_dict
    return result

@login_required
@rewards_routes.route('/new', methods=["POST"])
def create_reward():
    form = CreateRewardForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        user_id = current_user.id
        title = request.json["title"]
        notes = request.json["notes"]
        tags = request.json["tags"]
        cost = request.json["cost"]

        new_reward = Reward(
            user_id=user_id,
            title=title,
            notes=notes,
            tags=tags,
            cost=cost)

        db.session.add(new_reward)
        db.session.commit()
        return new_reward.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

@login_required
@rewards_routes.route('/<int:id>/update', methods=["PUT"])
def update_reward(id):
    curr_reward = Reward.query.get(id)
    form = UpdateRewardForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        user_id = current_user.id
        title = request.json["title"]
        notes = request.json["notes"]
        cost = request.json["cost"]
        tags = request.json["tags"]

        curr_reward.user_id = user_id
        curr_reward.title = title
        curr_reward.notes = notes
        curr_reward.cost = cost
        curr_reward.tags = tags

        updated_reward = curr_reward
        updated_reward_dict = updated_reward.to_dict()

        db.session.commit()
        return updated_reward_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}


@login_required
@rewards_routes.route('/<int:id>/delete', methods=["DELETE"])
def delete_reward(id):
    curr_reward = Reward.query.get(id)
    db.session.delete(curr_reward)
    db.session.commit()
    return curr_reward.to_dict()

@login_required
@rewards_routes.route('/<int:id>')
def get_one_reward(id):
    reward = Reward.query.get(id)
    return reward.to_dict()
