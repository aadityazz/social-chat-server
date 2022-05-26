import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAHx2QmAq1_f-ov4I6fjkZaAytuBrf6KL4",
  authDomain: "socialschat.firebaseapp.com",
  projectId: "socialschat",
  storageBucket: "socialschat.appspot.com",
  messagingSenderId: "1054465072928",
  appId: "1:1054465072928:web:f06aeeff237fc176e08145",
  measurementId: "G-KW4X4Q4RZM"
}).auth()
