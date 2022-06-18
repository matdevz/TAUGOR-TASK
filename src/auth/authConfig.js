import { initializeApp } from 'firebase/app';

export const authConfig = initializeApp({
	apiKey: process.env.API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
});

// https://firebase.google.com/docs/web/setup#available-libraries
