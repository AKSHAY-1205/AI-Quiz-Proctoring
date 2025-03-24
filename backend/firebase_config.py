import firebase_admin
from firebase_admin import credentials, firestore

# Load Firebase Admin SDK
cred = credentials.Certificate("ai-quiz-proctoring-firebase-adminsdk-fbsvc-01d5529d61.json")
firebase_admin.initialize_app(cred)

# Initialize Firestore
db = firestore.client()
