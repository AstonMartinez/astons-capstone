from .db import db, environment, SCHEMA, add_prefix_for_prod

class FeatureRequest(db.Model):
    __tablename__ = 'feature_requests'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(500), nullable=False)
    response = db.Column(db.String(1000), nullable=False)
    description = db.Column(db.String(1500), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'category': self.category,
            'response': self.response,
            'description': self.description
        }
