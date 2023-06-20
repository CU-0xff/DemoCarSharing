from flask import Flask, jsonify
import requests
import os

app = Flask(__name__)

@app.route('/get_file_content', methods=['GET'])
def get_file_content():
    # Get JSON response from the web service
    response = requests.get('http://jsonwebservice.com/path')  # Replace with your actual URL
    data = response.json()
    
    # Extract file path
    file_path = data.get('file_path')

    if file_path and os.path.isfile(file_path):
        with open(file_path, 'r') as file:
            file_content = file.read()
        return jsonify({'file_content': file_content}), 200
    else:
        return jsonify({'error': 'Invalid file path'}), 400

if __name__ == '__main__':
    app.run(port=5000)
