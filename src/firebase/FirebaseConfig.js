import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyAKrZgQQCX8PyyVAxe1wXkFitcD2DKOH2E',
	authDomain: 'taugor-manager.firebaseapp.com',
	projectId: 'taugor-manager',
	storageBucket: 'taugor-manager.appspot.com',
	messagingSenderId: '69693156700',
	appId: '1:69693156700:web:6fd7f0caf884264a422599',
};

export const config = initializeApp(firebaseConfig);

// =====================================================
// apiKey: process.env.API_KEY,
// authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// projectId: process.env.FIREBASE_PROJECT_ID,
// storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.FIREBASE_SENDER_ID,
// appId: process.env.FIREBASE_APP_ID,
