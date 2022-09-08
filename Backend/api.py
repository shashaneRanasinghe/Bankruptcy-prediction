from email import message
from flask import Flask, jsonify, request
from flask_cors import CORS

import controller as ctl

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    user_data = request.get_json()
    response = ctl.predict(user_data)
    return jsonify(response)

@app.route('/', methods=['GET'])
def home():
    message = "Welcome to Banckrupy Prediction"
    return jsonify(message)


if __name__ == '__main__':
    app.run(debug=True)
    