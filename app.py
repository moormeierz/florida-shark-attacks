from flask import Flask, jsonify, render_template




app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/heat")
def heat():
    return render_template('heat.html')


@app.route("/bar")
def bar():
    return render_template('bar.html')


@app.route("/pie")
def pie():
    return render_template('pie.html')


if __name__ == "__main__":
    app.run(debug=True)
