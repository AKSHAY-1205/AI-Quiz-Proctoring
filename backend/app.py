from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

@app.route('/')
def home():
    return jsonify({"message": "AI Quiz Proctoring System Backend Running"})

if __name__ == '__main__':
    app.run(debug=True)
