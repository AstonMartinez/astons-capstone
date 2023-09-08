from .db import db, environment, SCHEMA, add_prefix_for_prod

class Daily(db.Model):
    __tablename__ = 'dailies'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    notes = db.Column(db.String(500), nullable=False)
    difficulty = db.Column(db.String(50))
    start_date = db.Column(db.DateTime, nullable=False)
    num_weeks = db.Column(db.Integer, nullable=False)
    day_of_week = db.Column(db.String)
    tags = db.Column(db.String(255))

    user = db.relationship('User', back_populates='dailies')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'notes': self.notes,
            'difficulty': self.difficulty,
            'start_date': self.start_date,
            'num_weeks': self.num_weeks,
            'day_of_week': self.day_of_week,
            'tags': self.tags
        }
