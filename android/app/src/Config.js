import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBA7yAdbe3NzRDviflAeUl7AvDBQWkaaHs",
    authDomain: "fir-demo-20c5d.firebaseapp.com",
    databaseURL: "https://fir-demo-20c5d.firebaseio.com",
    projectId: "fir-demo-20c5d",
    storageBucket: "fir-demo-20c5d.appspot.com",
    messagingSenderId: "1028063217292"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
