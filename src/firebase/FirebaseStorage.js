import { config } from './FirebaseConfig';
import {
	getStorage,
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
} from 'firebase/storage';

const storage = getStorage(config);

export const salveFilesStorage = async (file) => {
	const fileRef = ref(storage, `files/${file.name}`);

	try {
		await uploadBytes(fileRef, file);
		const fileUrl = await getDownloadURL(fileRef);

		return { fileUrl: fileUrl, fileRef: fileRef.fullPath };
	} catch (error) {
		console.log(error);
	}
};

export const deleteFileStorage = async (fileRef) => {
	try {
		const desertRef = ref(storage, fileRef);

		await deleteObject(desertRef);
	} catch (error) {
		console.log(error);
	}
};
