<!DOCTYPE html>
<html lang="en">
<body>

<h1>Flask & React Application</h1>

<p>This project is a web application built with a Flask backend and a React frontend. The application allows users to add, view, and delete items from a list. Each item includes a name, description, and image URL.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#running-the-application">Running the Application</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
</ul>

<h2 id="prerequisites">Prerequisites</h2>
<p>Before you begin, ensure you have met the following requirements:</p>
<ul>
    <li><a href="https://www.python.org/downloads/">Python 3.x</a> installed on your machine</li>
    <li><a href="https://nodejs.org/en/download/">Node.js</a> and npm (Node Package Manager) installed</li>
    <li>Basic knowledge of Python, Flask, and React</li>
</ul>

<h2 id="installation">Installation</h2>

<h3>Backend</h3>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/adxdits/Polypo-landing-page/
cd Polypo-landing-page 
cd my_flask_app</code></pre>
    </li>
    <li>Create a virtual environment:
        <pre><code>python -m venv venv</code></pre>
    </li>
    <li>Activate the virtual environment:
        <ul>
            <li>On Windows:
                <pre><code>venv\Scripts\activate</code></pre>
            </li>
            <li>On macOS and Linux:
                <pre><code>source venv/bin/activate</code></pre>
            </li>
        </ul>
    </li>
    <li>Install the required Python packages:
        <pre><code>pip install flask flask-cors</code></pre>
    </li>
    <li>Set up the SQLite database:
        <pre><code>python
&gt;&gt;&gt; import sqlite3
&gt;&gt;&gt; conn = sqlite3.connect('product.db')
&gt;&gt;&gt; cursor = conn.cursor()
&gt;&gt;&gt; cursor.execute('''
CREATE TABLE product (
        id INTEGER PRIMARY KEY,
        name TEXT,
        image_url TEXT,
        description TEXT
)
''')
&gt;&gt;&gt; conn.commit()
&gt;&gt;&gt; conn.close()
&gt;&gt;&gt; exit()</code></pre>
    </li>
</ol>

<h3>Frontend</h3>
<ol>
    <li>Navigate to the <code>frontend</code> directory:
        <pre><code>cd Polypo-landing-page</code></pre>
    </li>
    <li>Install the required npm packages:
        <pre><code>npm install</code></pre>
    </li>
</ol>

<h2 id="running-the-application">Running the Application</h2>

<h3>Backend</h3>
<ol>
    <li>Ensure you are in the project's root directory and the virtual environment is activated.</li>
    <li>Start the Flask server:
        <pre><code>flask run</code></pre>
    </li>
</ol>

<h3>Frontend</h3>
<ol>
    <li>Ensure you are in the <code>frontend</code> directory.</li>
    <li>Start the React development server:
        <pre><code>npm start</code></pre>
    </li>
    <li>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a>.</li>
</ol>

<h2 id="project-structure">Project Structure</h2>
<pre><code>Polypo-landing-page/
│
├── my_flask_app/
│   ├── app.py
│   ├── product.db
│   └── ...
│

│├── public/
│├── src/
│   │   ├── components/
│   │   │   ├── Items.js
│   │   │   ├── MenuBar.js
│   │   │   ├── WelcomeMessage.js
│   │   │   └── Footer.js
│   │   ├── App.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── ...
│
├── README.md
└── ...
</code></pre>

<h2 id="api-endpoints">API Endpoints</h2>

<h3>GET /product</h3>
<p>Retrieve all products.</p>

<p><strong>Response:</strong></p>
<pre><code>[
    {
        "id": 1,
        "name": "Item 1",
        "image_url": "http://example.com/image1.jpg",
        "description": "Description 1"
    },
    ...
]</code></pre>

<h3>POST /product</h3>
<p>Add a new product.</p>

<p><strong>Request:</strong></p>
<pre><code>{
    "name": "New Item",
    "image_url": "http://example.com/new-image.jpg",
    "description": "New Description"
}</code></pre>

<p><strong>Response:</strong></p>
<pre><code>{
    "id": 2,
    "name": "New Item",
    "image_url": "http://example.com/new-image.jpg",
    "description": "New Description"
}</code></pre>

<h3>DELETE /product/&lt;id&gt;</h3>
<p>Delete a product by ID.</p>

<p><strong>Response:</strong></p>
<pre><code>{
    "message": "Product deleted successfully"
}</code></pre>

<h2 id="acknowledgements">Acknowledgements</h2>
<p>This project was developed using <a href="https://flask.palletsprojects.com/">Flask</a> and <a href="https://reactjs.org/">React</a>. Special thanks to the open-source commmunity for providing these tools and resources.</p>

</body>
</html>
