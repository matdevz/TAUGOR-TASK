import { config } from './FirebaseConfig';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
} from 'firebase/auth';

export const auth = getAuth(config);

export const authCreateUser = async (email, password) => {
	try {
		const user = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		return user.user;
	} catch (error) {
		alert('Este usuário já existe! Tente efetuar o login.');
	}
};

export const authLoginUser = async (email, password) => {
	try {
		const user = await signInWithEmailAndPassword(auth, email, password);
		return user.user;
	} catch (error) {
		alert('Email ou a senha está incorreta!');
	}
};

export const authLogoutUser = async () => {
	try {
		await auth.signOut();
	} catch (error) {
		alert('Ouve uma falha:( Tente novamente!');
	}
};

export const authResetPassword = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		return;
	} catch (error) {
		if (error.code === 'auth/user-not-found') {
			alert('Este email não consta no sistema!');
		}
	}
};
