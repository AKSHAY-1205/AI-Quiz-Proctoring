// Import Firebase SDK

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase Config (Replace with your Firebase Project details)
const firebaseConfig = {
    apiKey: "AIzaSyBVENMm5SyIC7xBvCo-Vn-f8o1jvg-OVxw",
    authDomain: "ai-quiz-proctoring.firebaseapp.com",
    projectId: "ai-quiz-proctoring",
    storageBucket: "ai-quiz-proctoring.firebasestorage.app",
    messagingSenderId: "481514203603",
    appId: "1:481514203603:web:80a7cf1de386c99c4ae726"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
