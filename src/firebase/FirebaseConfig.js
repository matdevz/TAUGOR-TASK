import { initializeApp } from 'firebase/app';

// Tive uns problemas com firebase e não consigo deixar as propriedades no dotenv
const firebaseConfig = {
	apiKey: 'AIzaSyAKrZgQQCX8PyyVAxe1wXkFitcD2DKOH2E',
	authDomain: 'taugor-manager.firebaseapp.com',
	projectId: 'taugor-manager',
	storageBucket: 'taugor-manager.appspot.com',
	messagingSenderId: '69693156700',
	appId: '1:69693156700:web:6fd7f0caf884264a422599',
};

export const config = initializeApp(firebaseConfig);
