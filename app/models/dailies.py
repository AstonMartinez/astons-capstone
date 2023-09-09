from .db import db, environment, SCHEMA, add_prefix_for_prod

class Daily(db.Model):
    __tablename__ = 'dailies'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    notes = db.Column(db.String(500), nullable=False)
    checklist = db.Column(db.Text)
    difficulty = db.Column(db.String(50))
    start_date = db.Column(db.DateTime, nullable=False)
    repeats = db.Column(db.String, nullable=False)
    num_repeats = db.Column(db.Integer, nullable=False)
    day_of_repeat = db.Column(db.String)
    tags = db.Column(db.String(255))

    user = db.relationship('User', back_populates='dailies')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'notes': self.notes,
            'checklist': self.checklist,
            'difficulty': self.difficulty,
            'start_date': self.start_date,
            'repeats': self.repeats,
            'num_repeats': self.num_repeats,
            'day_of_repeat': self.day_of_repeat,
            'tags': self.tags
        }
