from flask import Flask, render_template, request, Response
import cv2
import numpy as np
from camera import VideoCamera


app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("index.html",token="Hello Flask_React")

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/video_feed', methods=['GET','POST'])
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/login',methods = ['GET','POST'])
def login():
    return "Welcome Akansha"


if __name__ == '__main__':
    app.run(debug=True)

