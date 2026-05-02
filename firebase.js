// IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// YOUR CONFIG (FROM SCREENSHOT)
const firebaseConfig = {
  apiKey: "AIzaSyAcPx2ck2Vx-md4v9I7IHd4yyorEVzytUE",
  authDomain: "prealty-final.firebaseapp.com",
  projectId: "prealty-final",
  storageBucket: "prealty-final.firebasestorage.app",
  messagingSenderId: "245368190313",
  appId: "1:245368190313:web:75259e08cd86cfe33a39f8",
  measurementId: "G-T29WN7TS0Z"
};
{
  "hosting": {
    "site": "prealty-final-5a7b2",

    "public": "public",
    ...
  }
}


// INITIALIZE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// EXPORT
export { db };