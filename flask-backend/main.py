from flask import Flask, render_template, request, Response
import cv2
import numpy as np

app = Flask(__name__)
face_cascade = cv2.CascadeClassifier('cascades/data/haarcascade_frontalface_alt2.xml')

@app.route('/')
def hello_world():
    return render_template("index.html",token="Hello Flask_React")

# Create capture object to trigger the camera and read image from it
camera = cv2.VideoCapture(0)
def gen_frames():
    while True:
        # Read the camera frame
        success, frame = camera.read()
        if not success:
            break
        elif cv2.waitKey(20) & ord('q'):
            break
        else:
            # format the frame in jpg format
            ret, buffer = cv2.imencode('jpg',frame)
            # convert the buffer into bytes
            frame = buffer.tobytes()
            # concatenate the frame one by one
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/', methods=['POST'])
def register():
    name = request.form.get('username')
    return name

@app.route('/video_feed', methods=['GET'])
def show():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(debug=True)
