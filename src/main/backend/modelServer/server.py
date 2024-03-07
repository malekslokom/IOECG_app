from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/api/models")
def get_models():
    with open('catalogueStaticData.json') as f:
        models = json.load(f)
    return jsonify(models)

if __name__ == "__main__":
    app.run(debug=True)
