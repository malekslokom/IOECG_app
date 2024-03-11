from flask import Flask, jsonify
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app)

# Configuration de service
SERVICE_NAME = "projets"
SERVICE_PORT = 5003
CONSUL_AGENT_URL = "http://localhost:8500/v1/agent/service/register"

# Fonction pour enregistrer le service auprès de Consul
def register_service_with_consul():
    service_info = {
        "name": SERVICE_NAME,
        "tags": ["projet", "flask"],
        "port": SERVICE_PORT,
        "check": {
            "http": f"http://127.0.0.1:{SERVICE_PORT}/api/{SERVICE_NAME}/health",
            "interval": "10s"
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

@app.route('/api/projets/health')
def health():
    return jsonify({"status": "up"})

@app.route('/api/projets/')
def getAll():
    data = [
        {
            "nom": "Projet 1",
            "dateCreation": "01/01/24",
            "auteur": "Andy",
            "version": "V1",
            "type": "Classification",
        },
        {
            "nom": "Projet 2",
            "dateCreation": "01/01/24",
            "auteur": "Andy",
            "version": "V1",
            "type": "régression",
        },
        {
            "nom": "Projet 3",
            "dateCreation": "01/01/24",
            "auteur": "Andy",
            "version": "V1",
            "type": "Visualisation",
        },
        {
            "nom": "Projet 4",
            "dateCreation": "01/01/24",
            "auteur": "Andy",
            "version": "V1",
            "type": "Classification",
        },
    ]
    return jsonify(data)

if __name__ == "__main__":
    register_service_with_consul()
    app.run(debug=True, port=SERVICE_PORT, host='0.0.0.0')  # Utilisez '0.0.0.0' pour rendre votre service accessible à partir d'autres machines sur le réseau
