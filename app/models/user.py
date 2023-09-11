from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    bio = db.Column(db.String(500))
    experience_points = db.Column(db.Integer, nullable=False)
    level = db.Column(db.Integer, nullable=False)
    date_joined = db.Column(db.DateTime, nullable=False)
    gold = db.Column(db.Integer, nullable=False)
    health = db.Column(db.Integer, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)


    habits = db.relationship('Habit', back_populates='user', cascade='all, delete-orphan')
    dailies = db.relationship('Daily', back_populates='user', cascade='all, delete-orphan')
    to_dos = db.relationship('ToDo', back_populates='user', cascade='all, delete-orphan')
    rewards = db.relationship('Reward', back_populates='user', cascade='all, delete-orphan')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'bio': self.bio,
            'experience_points': self.experience_points,
            'level': self.level,
            'date_joined': self.date_joined,
            "gold": self.gold,
            "health": self.health
        }
