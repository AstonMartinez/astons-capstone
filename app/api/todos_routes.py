from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.to_dos import ToDo
from flask_login import current_user, login_required
from datetime import datetime
from app.forms.create_todo import CreateToDoForm
from app.forms.update_todos import UpdateToDosForm
from .auth_routes import validation_errors_to_error_messages

todos_routes = Blueprint('todos', __name__)
# session = db.session

@login_required
@todos_routes.route('/user-to-dos')
def get_user_todos():
    user_todos = ToDo.query.filter(ToDo.user_id == current_user.id)
    result = {}
    if user_todos:
        for todo in user_todos:
            todo_dict = todo.to_dict()
            result[todo.id] = todo_dict
    return result

@login_required
@todos_routes.route('/new', methods=["POST"])
def create_todo():
    form = CreateToDoForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        user_id = current_user.id
        title = request.json["title"]
        notes = ''
        difficulty = "easy"
        checklist = ''
        due_date = datetime.now()
        tags = ''
        status = "incomplete"

        new_todo = ToDo(
            user_id=user_id,
            title=title,
            notes=notes,
            difficulty=difficulty,
            checklist=checklist,
            due_date=due_date,
            tags=tags,
            status=status)

        db.session.add(new_todo)
        db.session.commit()
        return new_todo.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

@login_required
@todos_routes.route('/<int:id>/update', methods=["PUT"])
def update_todo(id):
    curr_todo = ToDo.query.get(id)
    form = UpdateToDosForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    user_id = current_user.id
    title = request.json["title"]
    notes = request.json["notes"]
    checklist = request.json["checklist"]
    due_date = request.json["due_date"]
    tags = request.json["tags"]
    status = request.json["status"]
    difficulty = request.json["difficulty"]

    current_due_date = curr_todo.due_date.strftime("%d %m %Y").split()
    new_due_date = due_date.split()

    if form.validate_on_submit():
        if current_due_date != new_due_date:
            new_day = int(new_due_date[0])
            new_month = int(new_due_date[1])
            new_year = int(new_due_date[2])
            curr_todo.due_date = datetime(new_year, new_month, new_day)

        curr_todo.title = title
        curr_todo.notes = notes
        curr_todo.checklist = checklist
        curr_todo.tags = tags
        curr_todo.status = status
        curr_todo.difficulty = difficulty

        updated_todo = curr_todo
        updated_todo_dict = updated_todo.to_dict()
        db.session.commit()
        return updated_todo_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}


@login_required
@todos_routes.route('/<int:id>/delete', methods=["DELETE"])
def delete_todo(id):
    curr_todo = ToDo.query.get(id)
    db.session.delete(curr_todo)
    db.session.commit()
    return curr_todo.to_dict()

@login_required
@todos_routes.route('/<int:id>')
def get_one_todo(id):
    to_do = ToDo.query.get(id)
    return to_do.to_dict()

@login_required
@todos_routes.route('/<int:id>/update-status', methods=["PUT"])
def update_todo_stat(id):
    to_do = ToDo.query.get(id)
    status = request.json["status"]
    to_do.status = status
    db.session.commit()
    return to_do.to_dict()
