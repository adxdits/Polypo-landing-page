import sqlite3
from flask import Flask, g, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:5173")

def getdb():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect('product.db')
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/product', methods=['GET'])
def getproduct():
    db = getdb()
    cursor = db.cursor()
    cursor.execute('''SELECT * FROM product''')
    products = cursor.fetchall()
    response = jsonify([{'id': row[0], 'name': row[1], 'image_url': row[2], 'description': row[3]} for row in products])
    return response

@app.route('/product', methods=['POST'])
def postproduct():
    db = getdb()
    data = request.json
    id = data.get('id')
    name = data.get('name')
    image_url = data.get('image_url')
    description = data.get('description')

    cursor = db.cursor()
    cursor.execute('''INSERT INTO product (id, name, image_url, description) VALUES (?, ?, ?, ?)''', (id, name, image_url, description))
    db.commit()
    response = jsonify({'message': 'Product added successfully'})
    return response, 201

if __name__ == '__main__':
    app.run(debug=True)
