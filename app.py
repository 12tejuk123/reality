from flask import Flask, request, jsonify, render_template
import sqlite3

app = Flask(__name__)

# =====================================
# DATABASE CONNECTION
# =====================================

def connect_db():

    conn = sqlite3.connect("realty.db")

    conn.row_factory = sqlite3.Row

    return conn


# =====================================
# CREATE TABLE
# =====================================

def create_table():

    conn = connect_db()

    cursor = conn.cursor()

    cursor.execute("""

        CREATE TABLE IF NOT EXISTS inquiries(

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            name TEXT,

            email TEXT,

            phone TEXT,

            message TEXT

        )

    """)

    conn.commit()

    conn.close()

create_table()


# =====================================
# HOME PAGE
# =====================================

@app.route("/")
def home():

    return render_template("index.html")


# =====================================
# SAVE CONTACT FORM
# =====================================

@app.route("/save_inquiry", methods=["POST"])
def save_inquiry():

    data = request.json

    name = data.get("name")

    email = data.get("email")

    phone = data.get("phone")

    message = data.get("message")

    conn = connect_db()

    cursor = conn.cursor()

    cursor.execute("""

        INSERT INTO inquiries
        (name, email, phone, message)

        VALUES (?, ?, ?, ?)

    """, (name, email, phone, message))

    conn.commit()

    conn.close()

    return jsonify({
        "message":"Inquiry Saved Successfully"
    })


# =====================================
# ADMIN DASHBOARD
# =====================================

@app.route("/admin")
def admin():

    conn = connect_db()

    cursor = conn.cursor()

    cursor.execute("SELECT * FROM inquiries")

    inquiries = cursor.fetchall()

    conn.close()

    return render_template(
        "admin.html",
        inquiries=inquiries
    )


# =====================================
# RUN APP
# =====================================

if __name__ == "__main__":
    app.run()