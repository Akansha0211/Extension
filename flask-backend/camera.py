import cv2

class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)

    def __del__(self):
        self.video.release()

    def get_frame(self):
        success, image = self.video.read()
        face_cascades = cv2.CascadeClassifier('cascades/data/haarcascade_frontalface_alt2.xml')
        gray = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
        faces = face_cascades.detectMultiScale(gray,scaleFactor=1.5,minNeighbors=5)
        for(x,y,w,h) in faces:
            roi_gray = gray[y:y+h, x:x+w]
            font = cv2.FONT_HERSHEY_SIMPLEX
            color = (255,0,0)
            stroke = 2
            end_cord_x = x+w
            end_cord_y = y+h
            cv2.rectangle(image,(x,y),(end_cord_x,end_cord_y),color,stroke)
        ret, jpeg = cv2.imencode('.jpg', image)
        return jpeg.tobytes()