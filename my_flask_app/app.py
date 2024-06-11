# app.py
import sqlite3
from flask import Flask, g, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
def getdb():
    db=getattr(g,'_database',None)
    if db is None:
        db=g._database=sqlite3.connect('product.db')
    return db

app = Flask(__name__)

@app.route('/product', methods=['GET'])
def getproduct():
    db=getdb()
    cursor=db.cursor()
    cursor.execute('''SELECT * FROM product ''')
    return jsonify(cursor.fetchall())

@app.route('/product',  methods=['POST'])
def postproduct():
    db=getdb()
    data=request.json
    id=data.get('id')
    name=data.get('name')
    image_url=data.get('image_url')
    description=data.get('description')

    cursor=db.cursor()
    cursor.execute('''INSERT INTO product(id,name,image_url,description) VALUES(?,?,?,?)''' , (id,name,image_url,description))
    db.commit()
    return jsonify({'message': 'Product added successfully'}), 201 






if __name__ == '__main__':
    app.run(debug=True)