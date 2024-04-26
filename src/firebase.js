import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4zfq8DFK8IKLkmYk5k_t6ZiTlOuDxDa8",
  authDomain: "blog-with-firebase-app.firebaseapp.com",
  projectId: "blog-with-firebase-app",
  storageBucket: "blog-with-firebase-app.appspot.com",
  messagingSenderId: "849791839765",
  appId: "1:849791839765:web:fc4b8bd4a75a966f18a81c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
