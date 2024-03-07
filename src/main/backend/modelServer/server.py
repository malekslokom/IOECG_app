from flask import Flask, jsonify
from flask_cors import CORS
import requests
import json
app = Flask(__name__)
CORS(app)
# Configuration de service
SERVICE_NAME = "models"
SERVICE_PORT = 5000
CONSUL_AGENT_URL = "http://127.0.0.1:8500/v1/agent/service/register"
# Fonction pour enregistrer le service auprès de Consul
def register_service_with_consul():
    service_info = {
        "name": SERVICE_NAME,
        "tags": ["models"],
        "port": SERVICE_PORT,
        "check": {
            "http": f"http://127.0.0.1:{SERVICE_PORT}/api/models",
            "interval": "3s"
        }
    }

    try:
        response = requests.put(CONSUL_AGENT_URL, data=json.dumps(service_info))
        if response.status_code == 200:
            print("Service enregistré avec succès dans Consul.")
        else:
            print("Erreur lors de l'enregistrement du service dans Consul:", response.text)
    except Exception as e:
        print("Erreur lors de la communication avec Consul:", str(e))

# Exécutez la fonction d'enregistrement lorsque l'application Flask démarre
with app.app_context():
    register_service_with_consul()
@app.route("/api/models")
def get_models():
    # setup_consul_registration()
    with open('catalogueStaticData.json') as f:
        models = json.load(f)
    return jsonify(models)

if __name__ == "__main__":
    app.run(debug=True)
