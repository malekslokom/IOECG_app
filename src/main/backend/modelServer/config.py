
import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgresql:postgresql@localhost/models'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    #SECRET_KEY = os.environ.get('SECRET_KEY') or 'your-secret-key'
