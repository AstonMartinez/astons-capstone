from .db import db, environment, SCHEMA

class EquipmentItem(db.Model):
    __tablename__ = 'equipment'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(500), nullable=False)
    strength = db.Column(db.Integer, nullable=False)
    str_gear_num = db.Column(db.Integer, nullable=False)
    str_class_bonus = db.Column(db.Integer, nullable=False)
    constitution = db.Column(db.Integer, nullable=False)
    const_gear_num = db.Column(db.Integer, nullable=False)
    const_class_bonus = db.Column(db.Integer, nullable=False)
    intelligence = db.Column(db.Integer, nullable=False)
    int_gear_num = db.Column(db.Integer, nullable=False)
    int_class_bonus = db.Column(db.Integer, nullable=False)
    perception = db.Column(db.Integer, nullable=False)
    perc_gear_num = db.Column(db.Integer, nullable=False)
    perc_class_bonus = db.Column(db.Integer, nullable=False)
    cost = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'strength': self.strength,
            'str_gear_num': self.str_gear_num,
            'str_class_bonus': self.str_class_bonus,
            'constitution': self.strength,
            'const_gear_num': self.str_gear_num,
            'const_class_bonus': self.str_class_bonus,
            'intelligence': self.strength,
            'int_gear_num': self.str_gear_num,
            'int_class_bonus': self.str_class_bonus,
            'perception': self.strength,
            'perc_gear_num': self.str_gear_num,
            'perc_class_bonus': self.str_class_bonus,
            'cost': self.cost,
            'image': self.image
        }
