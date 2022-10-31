import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: (process.env.REACT_APP_AUTHDOMAIN =
    "f3-01-5583f.firebaseapp.com"),
  projectId: (process.env.REACT_APP_PROJECTID = "f3-01-5583f"),
  storageBucket: (process.env.REACT_APP_STORAGEBUCKET =
    "f3-01-5583f.appspot.com"),
  messagingSenderId: (process.env.REACT_APP_MESSAGING_SENDER_ID =
    "777940077282"),
  appId: (process.env.REACT_APP_APPID =
    "1:777940077282:web:ee7421c9ef05a8a9b06cbb"),
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
