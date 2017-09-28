import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAm1-jmZmX3MjADLztk4UrjpeWTmGZ3KpI",
    authDomain: "memes-social-media.firebaseapp.com",
    databaseURL: "https://memes-social-media.firebaseio.com",
    projectId: "memes-social-media",
    storageBucket: "",
    messagingSenderId: "350536442760"
};

export const firebaseApp = firebase.initializeApp (config);