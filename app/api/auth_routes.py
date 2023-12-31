from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.avatar import Avatar
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from datetime import datetime

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        user_dict = current_user.to_dict()

        avatar_to_return = Avatar.query.filter(Avatar.user_id == user_dict['id'])
        avatar_dict = avatar_to_return[0].to_dict()

        user_dict['avatar'] = avatar_dict
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        user_dict = user.to_dict()

        avatar_to_return = Avatar.query.filter(Avatar.user_id == user_dict['id'])
        avatar_dict = avatar_to_return[0].to_dict()

        user_dict['avatar'] = avatar_dict
        login_user(user)
        return user_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    all_users = User.query.all()
    user_id = len(all_users) + 1
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password'],
            bio='',
            experience_points=0,
            level=1,
            date_joined=datetime.now(),
            gold=0,
            health=100
        )



        user_avatar = Avatar(
            user_id=user_id,
            shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
            hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
            bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
            skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
            background="violet"
        )
        db.session.add(user)
        db.session.add(user_avatar)
        db.session.commit()

        user_dict = user.to_dict()
        avatar_dict = user_avatar.to_dict()

        user_dict['avatar'] = avatar_dict
        login_user(user)
        return user_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
