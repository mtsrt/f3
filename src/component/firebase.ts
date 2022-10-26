import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByFY36J0RT8WEo1A6ZvGM-b8AM4Bko1zo",
  authDomain: "f3-01-5583f.firebaseapp.com",
  projectId: "f3-01-5583f",
  storageBucket: "f3-01-5583f.appspot.com",
  messagingSenderId: "777940077282",
  appId: "1:777940077282:web:ee7421c9ef05a8a9b06cbb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
