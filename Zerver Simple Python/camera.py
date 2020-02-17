
import cv2

face_cascade = cv2.CascadeClassifier('DATA/haarcascade_frontalface_default.xml')


def detect_face(img):

    face_img = img.copy()

    face_rects = face_cascade.detectMultiScale(face_img)

    for(x, y, w, h) in face_rects:
        cv2.rectangle(face_img, (x, y), (x+w, y+h), (255, 255, 255), 5)

    return face_img


cap = cv2.VideoCapture(0)


while True:

    ret, frame = cap.read(0)

    frame = detect_face(frame)

    cv2.imshow('Video Face Detect', frame)

    k = cv2.waitKey(30) & 0xff
    if k == 27:
        break

cap.release()
cv2.destroyAllWindows()
++3