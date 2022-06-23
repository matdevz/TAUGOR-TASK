import React, { useState, useEffect, useContext } from 'react';
import { readDocuments } from '../../firebase/FirebaseStore';
import { Tasks } from '../Task';
import { Container } from './styles';
import { AuthContext } from '../../context/AuthContext';

export const AllTasks = () => {
	const [dataTask, setDataTask] = useState([]);

	const currentUser = useContext(AuthContext);

	useEffect(() => {
		const fetchDocuments = async () => {
			const documents = await readDocuments(currentUser.uid);

			setDataTask([...dataTask, documents]);
		};

		fetchDocuments();
	}, []);

	return (
		<>
			<Container>
				{dataTask.map((docs) => {
					return docs.map((doc) => {
						return (
							<Tasks
								id={doc.id}
								key={doc.id}
								status={doc.data.status}
								author={doc.data.author}
								title={doc.data.title}
								description={doc.data.description}
							/>
						);
					});
				})}
			</Container>
		</>
	);
};
