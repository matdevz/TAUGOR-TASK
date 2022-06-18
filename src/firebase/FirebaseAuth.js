import { config } from './FirebaseConfig';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

export const auth = getAuth(config);

export const authCreateUser = async (email, password) => {
	try {
		const user = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		return user;
	} catch (error) {
		return error;
	}
};

export const authLoginUser = async (email, password) => {
	try {
		const user = await signInWithEmailAndPassword(auth, email, password);
		return user;
	} catch (error) {
		return error;
	}
};

export const authLogoutUser = async () => {
	try {
		await auth.signOut();
	} catch (error) {
		return error;
	}
};
