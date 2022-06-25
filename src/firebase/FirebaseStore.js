import { config } from './FirebaseConfig';
import {
	getFirestore,
	collection,
	addDoc,
	// query,
	getDocs,
	getDoc,
	deleteDoc,
	setDoc,
	doc,
	// updateDoc,
} from 'firebase/firestore';

export const db = getFirestore(config);

const uid = localStorage.getItem('userUid');
const userCollectionRef = collection(db, 'users');
const taskCollectionRef = collection(db, `task${uid}`);

export const salveDatasUsers = async (userId, data) => {
	try {
		await setDoc(doc(userCollectionRef, userId), {
			name: data.name,
			email: data.email,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getDataUsers = async () => {
	try {
		const dataUsers = [];
		const querySnapshot = await getDocs(userCollectionRef);
		querySnapshot.forEach((doc) => {
			dataUsers.push({ id: doc.id, name: doc.data().name });
		});

		return dataUsers;
	} catch (error) {
		console.log(error);
	}
};

export const salveDocumentTask = async (data) => {
	const docRef = await addDoc(taskCollectionRef, data);

	console.log(docRef);
};

export const readDocumentsTasks = async () => {
	try {
		const querySnapshot = await getDocs(taskCollectionRef);

		const documents = [];
		querySnapshot.forEach((doc) => {
			documents.push({ id: doc.id, data: doc.data() });
		});

		return documents;
	} catch (erro) {
		console.log(erro);
	}
};

export const deleteDocumentTask = async (docId) => {
	try {
		await deleteDoc(doc(taskCollectionRef, docId));
	} catch (erro) {
		console.log(erro);
	}
};

export const updateDocumentTask = async (docId, data) => {
	try {
		await setDoc(doc(taskCollectionRef, docId), data);
	} catch (erro) {
		console.log(erro);
	}
};

export const getAllDataOneDoc = async (docId) => {
	try {
		const docRef = doc(taskCollectionRef, docId);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data();
		} else {
			console.log('No such document!');
		}
	} catch (erro) {
		console.log(erro);
	}
};
