// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAP1RhW4J-NC1olBnP5GssNNUeI1r1QtYo',
	authDomain: 'vitasgpt-desktop.firebaseapp.com',
	projectId: 'vitasgpt-desktop',
	storageBucket: 'vitasgpt-desktop.appspot.com',
	messagingSenderId: '231791171166',
	appId: '1:231791171166:web:f3a88851a81d9bc86e86cf',
	measurementId: 'G-53E72LZY0M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
