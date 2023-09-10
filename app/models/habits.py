from .db import db, environment, SCHEMA, add_prefix_for_prod

class Habit(db.Model):
    __tablename__ = 'habits'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    notes = db.Column(db.String(500), nullable=False)
    type = db.Column(db.String(255), nullable=False)
    difficulty = db.Column(db.String(255), nullable=False)
    tags = db.Column(db.String(255))
    pos_count = db.Column(db.Integer)
    neg_count = db.Column(db.Integer)
    status = db.Column(db.String(255))

    user = db.relationship('User', back_populates='habits')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'notes': self.notes,
            'type': self.type,
            'difficulty': self.difficulty,
            'tags': self.tags,
            'pos_count': self.pos_count,
            'neg_count': self.neg_count,
            'status': self.status
        }
