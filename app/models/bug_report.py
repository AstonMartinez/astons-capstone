from .db import db, environment, SCHEMA, add_prefix_for_prod

class BugReport(db.Model):
    __tablename__ = 'bug_reports'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_email = db.Column(db.String(255), nullable=False)
    bug_description = db.Column(db.String(1000), nullable=False)
    status = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'user_email': self.user_email,
            'bug_description': self.bug_description,
            'status': self.status
        }
