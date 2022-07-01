import React, { useEffect, useState } from 'react';
import { AppDrive } from '../AppDrive/index';
import { useNavigate, useParams } from 'react-router-dom';
import { salveFilesStorage } from '../../firebase/FirebaseStorage';
import {
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
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState('');
	const [file, setFile] = useState(null);
	const [fileDrive, setFileDrive] = useState('');

	const { id } = useParams();
	const navigate = useNavigate('');

	useEffect(() => {
		if (props.edit) {
			const getDatasTask = async () => {
				const dataTask = await getAllDataOneDoc(id);

				setTitle(dataTask.title);
				setDescription(dataTask.description);
				setStatus(dataTask.status);
			};

			getDatasTask();
		}
	}, [id, props.edit]);

	const handleSubmit = async () => {
		if (title && description && status && (file || fileDrive)) {
			console.log(fileDrive);
			if (props.salve) {
				const fileData = await salveFilesStorage(file);

				salveDocumentTask({
					title: title,
					description: description,
					status: status,
					fileUrl: fileData ? fileData.fileUrl : fileDrive,
					fileRef: fileData ? fileData.fileRef : null,
				});
			}
			if (props.edit) {
				const fileData = await salveFilesStorage(file);

				updateDocumentTask(id, {
					title: title,
					description: description,
					status: status,
					fileUrl: fileData.fileUrl || fileDrive,
					fileRef: fileData.fileRef,
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
		setStatus('');
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
						onChange={(event) => {
							setTitle(event.target.value);
						}}
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
						onChange={(event) => {
							setDescription(event.target.value);
						}}
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
							Status
						</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={status}
							label='Status'
							onChange={(event) => {
								setStatus(event.target.value);
							}}
						>
							<MenuItem value='pendente'>Pendente</MenuItem>
							<MenuItem value='andamento'>Andamento</MenuItem>
							<MenuItem value='finalizada'>Finalizada</MenuItem>
						</Select>
					</FormControl>
					<div
						style={{
							displa: 'flex',
							flexDirection: 'row',
							width: '100%',
						}}
					>
						<Button
							variant='outlined'
							component='label'
							type='file'
							accept='image/*,.pdf'
							style={{
								width: '50%',
							}}
							onChange={(event) => {
								setFile(event.target.files[0]);
								alert('Arquivo selecionado dos Arquivos!');
							}}
						>
							Upload local
							<input type='file' hidden />
						</Button>

						<AppDrive setFileDrive={setFileDrive} />
					</div>

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
