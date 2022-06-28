import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
	getDataUsers,
	salveDocumentTask,
	updateDocumentTask,
	getAllDataOneDoc,
} from '../../firebase/FirebaseStore';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

export const AppForm = (props) => {
	const [names, setNames] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [responsible, setResponsible] = useState('');
	const [status, setStatus] = useState('');

	const { id } = useParams();
	const navigate = useNavigate('');

	useEffect(() => {
		const getNamesUsers = async () => {
			const dataUsers = await getDataUsers();
			setNames(dataUsers);
		};

		getNamesUsers();
	}, []);

	useEffect(() => {
		if (props.edit) {
			const getDatasTask = async () => {
				const dataTask = await getAllDataOneDoc(id);

				setTitle(dataTask.title);
				setDescription(dataTask.description);
				setResponsible(dataTask.responsible);
				setStatus(dataTask.status);
			};

			getDatasTask();
		}
	}, [id, props.edit]);

	const handleSubmit = () => {
		if (title && description && responsible && status) {
			if (props.salve) {
				salveDocumentTask({
					title: title,
					description: description,
					responsible: responsible,
					status: status,
				});
			}
			if (props.edit) {
				updateDocumentTask(id, {
					title: title,
					description: description,
					responsible: responsible,
					status: status,
				});

				setTimeout(() => {
					navigate('/alltask');
				}, 2000);
			}
			resetStates();
			setTimeout(() => {
				props.salve
					? alert('Tarefa criada com sucesso')
					: alert('Tarefa alterada com sucesso');
			}, 300);
		} else {
			alert('Preencha todos os dados');
		}
	};

	const resetStates = () => {
		setTitle('');
		setDescription('');
		setResponsible('');
		setStatus('');
	};

	const handleTitle = (event) => {
		setTitle(event.target.value);
	};
	const handleDescription = (event) => {
		setDescription(event.target.value);
	};
	const handleAutor = (event) => {
		setResponsible(event.target.value);
	};
	const handleStatus = (event) => {
		setStatus(event.target.value);
	};

	return (
		<>
			<section
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100vw',
				}}
			>
				<form
					style={{
						marginTop: 90,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '10px',
						maxWidth: '500px',
						width: '100%',
						padding: '20px',
					}}
				>
					<TextField
						onChange={handleTitle}
						value={title}
						id='outlined-multiline-flexible'
						label='Título da tarefa'
						multiline
						maxRows={4}
						style={{
							width: '100%',
						}}
					/>

					<TextField
						onChange={handleDescription}
						value={description}
						id='outlined-multiline-static'
						label='Descrição da tarefa'
						multiline
						rows={2}
						style={{
							width: '100%',
						}}
					/>
					<FormControl fullWidth>
						<InputLabel id='demo-simple-select-label'>
							Responsável
						</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={responsible}
							label='Responsável'
							onChange={handleAutor}
						>
							{names.map((name) => {
								return (
									<MenuItem key={name.id} value={name.name}>
										{name.name}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel id='demo-simple-select-label'>
							Status
						</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={status}
							label='Status'
							onChange={handleStatus}
						>
							<MenuItem value='pending'>Pendente</MenuItem>
							<MenuItem value='progress'>Andamento</MenuItem>
							<MenuItem value='finished'>Finalizada</MenuItem>
						</Select>
					</FormControl>

					<Button
						variant='contained'
						style={{
							width: '100%',
						}}
						onClick={handleSubmit}
					>
						SALVAR
					</Button>
				</form>
			</section>
		</>
	);
};
