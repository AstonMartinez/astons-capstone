from .db import db, environment, SCHEMA, add_prefix_for_prod

class ToDo(db.Model):
    __tablename__ = 'to_dos'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    notes = db.Column(db.String(500), nullable=False)
    difficulty = db.Column(db.String(255), nullable=False)
    due_date = db.Column(db.DateTime)
    tags = db.Column(db.String(255))

    user = db.relationship('User', back_populates='to_dos')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'notes': self.notes,
            'difficulty': self.difficulty,
            'due_date': self.due_date,
            'tags': self.tags
        }
