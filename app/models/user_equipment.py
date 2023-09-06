from .db import db, environment, SCHEMA, add_prefix_for_prod

class UserEquipment(db.Model):
    __tablename__ = 'user_equipment'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    equipment_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("equipment.id")), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'equipment_id': self.equipment_id
        }
