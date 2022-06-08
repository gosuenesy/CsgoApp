import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqEVgt32_iPmOW5b5sA-ULGroTfTjLapw",
  authDomain: "csgoauth-f053f.firebaseapp.com",
  projectId: "csgoauth-f053f",
  storageBucket: "csgoauth-f053f.appspot.com",
  messagingSenderId: "763506382835",
  appId: "1:763506382835:web:8e565b8b7b3164cf8fa486"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)