import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAy4xQp_KcashjmllKSvfHFgzbuG0gS4ds",
    authDomain: "bloogg-a5946.firebaseapp.com",
    projectId: "bloogg-a5946",
    storageBucket: "bloogg-a5946.firebasestorage.app",
    messagingSenderId: "64395961318",
    appId: "1:64395961318:web:4e12fe2dc58ff08184ec27"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)