from .db import db, environment, SCHEMA, add_prefix_for_prod

class Avatar(db.Model):
    __tablename__ = 'avatars'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    shirt = db.Column(db.String(1000), nullable=False)
    hair = db.Column(db.String(1000), nullable=False)
    bangs = db.Column(db.String(1000), nullable=False)
    skin = db.Column(db.String(1000), nullable=False)
    background = db.Column(db.String(1000), nullable=False)

    user = db.relationship('User', back_populates='avatar')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'shirt': self.shirt,
            'hair': self.hair,
            'bangs': self.bangs,
            'skin': self.skin,
            'background': self.background
        }
