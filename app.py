from flask import Flask, request, jsonify, render_template
import pandas as pd
import os

app = Flask(__name__)

FILE = "users.xlsx"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/save_user", methods=["POST"])
def save_user():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    contact = data.get("contact")

    new_row = pd.DataFrame([{
        "Name": name,
        "Email": email,
        "Contact":contact,
    }])

    # If file exists → read it safely
    if os.path.exists(FILE):
        try:
            old = pd.read_excel(FILE, engine="openpyxl")
            df = pd.concat([old, new_row], ignore_index=True)
        except Exception:
            # If file corrupted → recreate
            df = new_row
    else:
        df = new_row

    # Always write clean file
    df.to_excel(FILE, index=False, engine="openpyxl")

    return jsonify({"message": "Saved successfully"})
app.run(port=5002, debug=True)