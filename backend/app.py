from webbrowser import get
from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Hey there!"


@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Montana Goodman",
        "about": "You currently have 2 frogs and 1 snail. We are still building out your profile."
    }
    return response_body


@app.route("/members")
def member():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/dashboard")
def dashboard():
    response_body = {
        "temp": "60 degrees F",
        "alert": "It's time to change your filter."
    }
    return response_body


if __name__ == "__main__":
    app.run(debug=True)
