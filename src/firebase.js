import firebase from "firebase/app"
import "firebase/auth"

const app  =firebase.initializeApp({
    apiKey: "AIzaSyBOxA0r0mTyo6Gwa9MKvQllJXntlzZG3b8",
    authDomain: "auth-development-cf789.firebaseapp.com",
    projectId: "auth-development-cf789",
    storageBucket: "auth-development-cf789.appspot.com",
    messagingSenderId: "880880277040",
    appId: "1:880880277040:web:5d10ecbeb886d98c9fbff5"
})
export const auth=app.auth()
export default app
