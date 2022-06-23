import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import { AppHeader } from '../../components/Header';
import { AppFormEdit } from '../../components/FormEdit';
import { readDocuments } from '../../firebase/FirebaseStore';

export const EditTask = () => {
	const currentUser = useContext(AuthContext);

	const [author, setAuthor] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) navigate('/login', { replace: true });
	});

	useEffect(() => {
		const fetchDocuments = async () => {
			const documents = await readDocuments(currentUser.uid);

			console.log(documents);
			console.log('documents');
		};

		fetchDocuments();
	}, []);

	return (
		<>
			<AppHeader routeName='Voltar' routePath='/dashboard' iconBack />
			<AppFormEdit
				author={author}
				title={title}
				description={description}
			/>
		</>
	);
};
