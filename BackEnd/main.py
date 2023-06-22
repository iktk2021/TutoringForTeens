from flask import Flask,request
from flask_cors import CORS
from database import *

app=Flask(__name__)
CORS(app, origins='*')
@app.route("/members")
def members():

    return {'members':get_users()}


@app.route("/NewJob",methods=["POST"])
def SignUpTutor():
    data=request.get_json()
    Username=data["username"]+":"+data["password"]+":"+data["email"]+":"+data["description"]
    new_user(Username)
    return {}

@app.route("/Tutors")
def returnTutors():
    tutors=get_users()
    tutors=tutors.split("\n")
    print(tutors)
    return {"tutors":list(tutors),"len":len(tutors)}
if(__name__=="__main__"):
    app.run(port=5000)