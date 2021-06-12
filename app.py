from flask import Flask, jsonify, render_template




app = Flask(__name__)


# @app.route("/home")
# def home():
#     return render_template("index.html")


@app.route("/home")
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
