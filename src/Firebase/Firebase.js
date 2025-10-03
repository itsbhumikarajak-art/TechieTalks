import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqxncfYj0AuOiMtfZMdNQ_9QnpUi4LaYA",
  authDomain: "forum-61450.firebaseapp.com",
  projectId: "forum-61450",
  storageBucket: "forum-61450.appspot.com",
  messagingSenderId: "308194594630",
  appId: "1:308194594630:web:622adbacc90303e8665f47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
