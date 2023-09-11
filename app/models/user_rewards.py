from .db import db, environment, SCHEMA, add_prefix_for_prod

class UserReward(db.Model):
    __tablename__ = 'user_rewards'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    reward_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("rewards.id")), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'reward_id': self.reward_id
        }
