import * as dotenv from 'dotenv';
dotenv.config();

import { recover } from './data';

import { initializeApp } from 'firebase/app';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const getData = async () => await recover();
const credentials = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(credentials);
const db = getFirestore(app);

getData().then(async (data) => {
    try {
        const docRef = await addDoc(collection(db, 'DatosPrevisionales'), data);
        console.log(`Added Doc ID: ${docRef.id}`);
    } catch (e) {
        console.error(e);
    }
});
