import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDGZKm9I0ASoJK4VtSM-RYM9hlWD8R1RkA",
  authDomain: "have-some-bit.firebaseapp.com",
  projectId: "have-some-bit",
  storageBucket: "have-some-bit.firebasestorage.app",
  messagingSenderId: "238068480234",
  appId: "1:238068480234:web:4d33b1ef79eeadb7837f93",
};
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
