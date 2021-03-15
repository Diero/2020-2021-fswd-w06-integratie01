from repositories.DataRepository import DataRepository
from flask import Flask, jsonify, request
from flask_cors import CORS

# Start app
app = Flask(__name__)
CORS(app)

# Custom endpoint
endpoint = '/api/v1'

# ROUTES


@app.route(endpoint + '/treinen')
def get_treinen():
    pass


@app.route(endpoint + '/bestemmingen')
def get_bestemmingen():
    pass


# Start app
if __name__ == '__main__':
    app.run(debug=True)
