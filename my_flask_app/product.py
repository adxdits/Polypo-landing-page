import sqlite3 
conn=sqlite3.connect('product.db')
cursor=conn.cursor()
cursor.execute(''' 
CREATE TABLE product (
        id INTEGER PRIMARY KEY,    
        name TEXT, 
        image_url TEXT , 
        description TEXT                
               )
''')

