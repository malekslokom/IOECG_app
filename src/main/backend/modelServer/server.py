from models.models import Model
from consul import register_service_with_consul
from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from enum import Enum

import json

app = Flask(__name__)
CORS(app)

#connection bd
app.config["SQLALCHEMY_DATABASE_URI"]= 'postgresql://postgres:postgresql@localhost:5433/models'
#app.config.from_object('config')
db = SQLAlchemy(app)

class TaskNature(Enum):
    BINARY_CLASSIFICATION = 'classification binaire'
    CLASSIFICATION_MULTI_CLASS = 'classification multi-class'
    REGRESSION = 'regression'

class Model(db.Model):
    __tablename__ = 'models'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(255))
    project_name = db.Column(db.String(255))
    description = db.Column(db.Text)
    architecture_name = db.Column(db.String(255))
    architecture_version = db.Column(db.String(50))
    architecture_description = db.Column(db.Text)
    total_params = db.Column(db.Integer)
    model_size = db.Column(db.String(50))
    batch_size = db.Column(db.Integer)
    learning_rate = db.Column(db.Float)
    task_nature = db.Column(db.String(50))
# Configuration de service
# SERVICE_NAME = "models"
# SERVICE_PORT = 5000
# CONSUL_AGENT_URL = "http://127.0.0.1:8500/v1/agent/service/register"
# # Fonction pour enregistrer le service auprès de Consul
# def register_service_with_consul():
#     service_info = {
#         "name": SERVICE_NAME,
#         "tags": ["models"],
#         "port": SERVICE_PORT,
#         "check": {
#             "http": f"http://127.0.0.1:{SERVICE_PORT}/api/models",
#             "interval": "3s"
#         }
#     }

#     try:
#         response = requests.put(CONSUL_AGENT_URL, data=json.dumps(service_info))
#         if response.status_code == 200:
#             print("Service enregistré avec succès dans Consul.")
#         else:
#             print("Erreur lors de l'enregistrement du service dans Consul:", response.text)
#     except Exception as e:
#         print("Erreur lors de la communication avec Consul:", str(e))

# # Exécutez la fonction d'enregistrement lorsque l'application Flask démarre
# with app.app_context():
#     register_service_with_consul()
# @app.route("/api/models")
# def get_models():
#     with open('catalogueStaticData.json') as f:
#         models = json.load(f)
#     return jsonify(models)



# Définition de la route pour récupérer les modèles
@app.route("/api/models", methods=["GET"])
def get_models():
    # Récupérer tous les modèles depuis la base de données
    models = Model.query.all()
    # Créer une liste des données des modèles pour les renvoyer au client
    model_data = [{
        "id": model.id,
        "name": model.name,
        "author": model.author,
        "project_name": model.project_name,
        "description": model.description,
        "architecture_name": model.architecture_name,
        "architecture_version": model.architecture_version,
        "architecture_description": model.architecture_description,
        "total_params": model.total_params,
        "model_size": model.model_size,
        "batch_size": model.batch_size,
        "learning_rate": model.learning_rate,
        "task_nature": model.task_nature
    } for model in models]
    # Renvoyer les données des modèles au format JSON
    return jsonify(model_data)


if __name__ == "__main__":
    register_service_with_consul() 
    app.run(debug=True)
