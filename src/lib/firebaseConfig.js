import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAPRqjRv4V3XJAKoNBWd_7szkJaDi3Xkmk",
    authDomain: "chat-tamaioz.firebaseapp.com",
    projectId: "chat-tamaioz",
    storageBucket: "chat-tamaioz.appspot.com",
    messagingSenderId: "318620281277",
    appId: "1:318620281277:web:e6ba1e9071d804e3008ad4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
// const storage = getStorage(app);

export { app, auth, db };
