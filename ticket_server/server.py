from flask import Flask,jsonify,request,make_response
from flask_cors import CORS, cross_origin

app=Flask(__name__)
cors = CORS(app)

import datetime
import jwt
import sqlite3
SECRET_KEY="secretkey"
# app.config['SECRET_KEY'] = 'your secret key'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ticket.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

from functools import wraps
def token_req(f):
    @wraps(f)
    def decorated(*args,**kwargs):
        token=request.args.get("token")
        if not token:
            return jsonify({"message":"token is missing"})
        try:
            data=jwt.decode(token,SECRET_KEY, algorithms=["HS256"])
            print(data)
        except Exception as e:
            print(e)
            return jsonify({"message":"token is invalid"})
        return f(*args,**kwargs)

    return decorated

@app.route("/unprotected")
def unprotected():
    return ""

@app.route("/protect")
@token_req
def protected():
    return jsonify({"message":"this is valid"})

@app.route("/login",methods=["POST"])
def login():
    if request.method == 'POST':
        data = request.json
        print(data)
        auth=data
        # print(auth.password)
        if auth and auth["password"]=="password":
            token=jwt.encode({'user':auth["username"],'exp':datetime.datetime.utcnow()+datetime.timedelta(minutes=30)},SECRET_KEY,algorithm="HS256")
            return jsonify({'token':token})

    return make_response("could not verify",401,{'WWW-authenticate':'Basic realm="login required'})

@app.route("/getUsers",methods=["GET"])
def getusers():
    try:
        with sqlite3.connect("ticket.db") as con:
            cursor = con.cursor()
            cursor.execute("select * from status")
            rows = cursor.fetchall()
            print(rows)
            return jsonify(rows)
    except Exception as e:
        print(e)


@app.route("/createTicket",methods=["POST"])
def createUser():
    data = request.json
    print(data)
    try:
        with sqlite3.connect("ticket.db") as con:
            cursor = con.cursor()
            statement="INSERT INTO status(status,category,priority,comments) values('Open',\"{}\",\"{}\",\"{}\")".format(data["issue"],data["priority"],data["comment"])
            print(statement)
            cursor.execute(statement)
            # rows = cursor.fetchall()
            # print(rows)
            return jsonify({"message":"Ticket created"})
    except Exception as e:
        print(e)
    return make_response("Problem in database", 503, {'WWW': 'Basic realm="create ticket'})


if __name__=='__main__':
    app.run(debug=True)