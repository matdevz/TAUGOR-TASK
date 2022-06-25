import React, { useEffect, useState } from 'react';
import { AppCard } from '../AppCard';
import { AppButton } from '../AppButton';
import Container from '@mui/material/Container';
import { readDocumentsTasks } from '../../firebase/FirebaseStore';

export const AppMain = () => {
	const [dataTasks, setDataTasks] = useState([]);

	useEffect(() => {
		const getDatasTasks = async () => {
			const docs = await readDocumentsTasks();
			setDataTasks(docs);
		};
		getDatasTasks();
	}, [dataTasks]);

	if (dataTasks.length === 0) {
		return (
			<>
				<Container
					maxWidth='lg'
					style={{ paddingTop: '80px', textAlign: 'center' }}
				>
					<img
						src='./assets/no-task.jpg'
						alt=''
						style={{ width: 'min(600px, 100%)' }}
					/>
					<h1 style={{ textAlign: 'center' }}>
						Nenhuma tareafa adicionada
					</h1>

					<AppButton pathName='/newtask' />
				</Container>
			</>
		);
	} else {
		return (
			<>
				<Container maxWidth='lg' style={{ paddingTop: '80px' }}>
					{dataTasks.map((doc) => {
						return (
							<AppCard
								key={doc.id}
								id={doc.id}
								status={doc.data.status}
								statusName={doc.data.status}
								titleTask={doc.data.title}
								AuthorName={doc.data.author}
							/>
						);
					})}

					<AppButton pathName='/newtask' />
				</Container>
			</>
		);
	}
};
