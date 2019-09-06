import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCPipOTOJNP_pkoRo66-T2kz17wMdsDFQw",
    authDomain: "secretsanta-c0277.firebaseapp.com",
    databaseURL: "https://secretsanta-c0277.firebaseio.com",
    projectId: "secretsanta-c0277",
    storageBucket: "",
    messagingSenderId: "247034467413",
    appId: "1:247034467413:web:99027af5b2cdbac58b30dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;