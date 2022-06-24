import { config } from './FirebaseConfig';
import {
	getFirestore,
	// collection,
	// addDoc,
	// query,
	// where,
	// getDocs,
	// deleteDoc,
	// setDoc,
	// doc,
	// updateDoc,
} from 'firebase/firestore';

export const db = getFirestore(config);
