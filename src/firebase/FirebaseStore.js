import { config } from './FirebaseConfig';
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	getDoc,
	deleteDoc,
	setDoc,
	query,
	doc,
	where,
} from 'firebase/firestore';

export const db = getFirestore(config);

const nameUser = localStorage.getItem('nameUser');
const userCollectionRef = collection(db, 'users');
const taskCollectionRef = collection(db, 'tasks');

export const salveDatasUsers = async (userId, data) => {
	try {
		await setDoc(doc(userCollectionRef, userId), data);
	} catch (error) {
		console.log(error);
	}
};
export const getUserName = async (userId) => {
	try {
		const queryDocs = query(userCollectionRef, where('id', '==', userId));

		const querySnapshot = await getDocs(queryDocs);

		const docName = {};
		querySnapshot.forEach((doc) => {
			docName.name = doc.data().name;
		});

		return docName;
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
	try {
		await addDoc(taskCollectionRef, data);
	} catch (erro) {
		console.log(erro);
	}
};

export const readDocumentsTasks = async () => {
	try {
		const queryDocs = query(
			taskCollectionRef,
			where('responsible', '==', nameUser)
		);

		const querySnapshot = await getDocs(queryDocs);

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

		if (docSnap.exists()) return docSnap.data();
	} catch (erro) {
		console.log(erro);
	}
};
