import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCreyHRcewBaQLwoO9rqwGZEkpF9d2l0Zk",
    authDomain: "fbasep-8e300.firebaseapp.com",
    projectId: "fbasep-8e300",
    storageBucket: "fbasep-8e300.appspot.com",
    messagingSenderId: "1010404054519",
    appId: "1:1010404054519:web:dba3b5b6e23d9523e68af2"
};

initializeApp(firebaseConfig);

//// DB
const DB = getFirestore();
//// AUTH
const AUTH = getAuth()

export { DB, AUTH }