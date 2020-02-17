import cv2

face_cascade = cv2.CascadeClassifier('DATA/haarcascade_frontalface_default.xml')


def detect_face(img):


    face_rects = face_cascade.detectMultiScale(
        img,
        scaleFactor=1.2,
        minNeighbors=5,
        minSize=(30, 30),
    )

    for(x, y, w, h) in face_rects:
        cv2.rectangle(img, (x, y), (x+w, y+h), (255, 255, 0), 3)

    return img


cap = cv2.imread('img.jpg')


while True:

        frame = detect_face(cap)

        cv2.imgshow('Image Face Detect', frame)

        k = cv2.waitKey(30) & 0xff
        if k == 27:
            break

cap.release()
cv2.destroyAllWindows()
