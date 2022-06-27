import React, { useEffect, useState } from 'react';
import { AppCard } from '../AppCard';
import { AppButton } from '../AppButton';
import Container from '@mui/material/Container';
import { readDocumentsTasks } from '../../firebase/FirebaseStore';

export const AppMain = (props) => {
	const [dataTasks, setDataTasks] = useState([]);
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		const getDatasTasks = async () => {
			const docs = await readDocumentsTasks();
			setDataTasks(docs);
		};
		getDatasTasks();
	}, [dataTasks]);

	useEffect(() => {
		const objSearch = dataTasks.filter(
			(obj) =>
				obj.data.title
					.toLowerCase()
					.indexOf(props.searching.toLowerCase()) > -1
		);

		setTaskList(objSearch);
	}, [dataTasks, props.searching]);

	if (dataTasks.length !== 0) {
		return (
			<>
				<Container maxWidth='lg' style={{ paddingTop: '80px' }}>
					{taskList.map((doc) => {
						return (
							<AppCard
								key={doc.id}
								id={doc.id}
								status={doc.data.status}
								statusName={doc.data.status}
								titleTask={doc.data.title}
								AuthorName={doc.data.author}
								description={doc.data.description}
							/>
						);
					})}

					<AppButton pathName='/newtask' />
				</Container>
			</>
		);
	} else {
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
						Nenhuma tarefa adicionada!
					</h1>

					<AppButton pathName='/newtask' />
				</Container>
			</>
		);
	}
};
