from flask import Flask, g, request, jsonify
from flask_cors import CORS
import sqlite3

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
    name = data.get('name')
    image_url = data.get('image_url')
    description = data.get('description')

    cursor = db.cursor()
    cursor.execute('''INSERT INTO product (name, image_url, description) VALUES (?, ?, ?)''', (name, image_url, description))
    db.commit()
    product_id = cursor.lastrowid
    response = jsonify({'id': product_id, 'name': name, 'image_url': image_url, 'description': description})
    return response, 201

@app.route('/product/<int:id>', methods=['DELETE'])
def deleteproduct(id):
    db = getdb()
    cursor = db.cursor()
    cursor.execute('''DELETE FROM product WHERE id = ?''', (id,))
    db.commit()
    if cursor.rowcount == 0:
        return jsonify({'message': 'Product not found'}), 404
    return jsonify({'message': 'Product deleted successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)
