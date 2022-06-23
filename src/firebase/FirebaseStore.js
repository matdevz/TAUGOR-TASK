import { config } from './FirebaseConfig';
import {
	getFirestore,
	collection,
	addDoc,
	query,
	where,
	getDocs,
	deleteDoc,
	setDoc,
	doc,
	updateDoc,
} from 'firebase/firestore';

export const db = getFirestore(config);

export const insertDataUser = async (currentId, data) => {
	const collectionRef = collection(db, 'users');

	try {
		const docRef = await setDoc(doc(collectionRef, currentId), data);
		return docRef;
	} catch (error) {
		console.log(error);
	}
};

export const salveDocument = async (currentId, data) => {
	const collectionRef = collection(db, `/users/${currentId}/tasks`);

	try {
		const docRef = await addDoc(collectionRef, data);
		return docRef;
	} catch (error) {
		console.log(error);
	}
};

export const readDocuments = async (currentId) => {
	const collectionRef = collection(db, `/users/${currentId}/tasks`);

	try {
		const querySnapshot = await getDocs(collectionRef);
		let documents = [];

		querySnapshot.docs.forEach((doc) => {
			documents.push({ id: doc.id, data: doc.data() });
		});

		return documents;
	} catch (error) {
		console.log(error);
	}
};

export const deteleDocument = async (currentId, title) => {
	const collectionRef = collection(db, `/users/${currentId}/tasks`);

	try {
		const queryDoc = query(collectionRef, where('title', '==', title));

		const querySnapshot = await getDocs(queryDoc);

		const { docs } = querySnapshot;
		await deleteDoc(docs[0].ref);
	} catch (error) {
		console.log(error);
	}
};

export const updateDocument = async (currentId, data) => {
	const collectionRef = collection(db, `/users/${currentId}/tasks`);

	try {
		const docRef = await updateDoc(collectionRef, data);
		return docRef;
	} catch (error) {
		console.log(error);
	}
};
