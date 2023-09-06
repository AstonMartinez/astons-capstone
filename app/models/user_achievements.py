from .db import db, environment, SCHEMA, add_prefix_for_prod

class UserAchievement(db.Model):
    __tablename__ = 'user_achievements'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    achievement_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("achievements.id")), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'achievement_id': self.achievement_id
        }
