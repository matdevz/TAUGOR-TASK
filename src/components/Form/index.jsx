import React, { useState, useContext } from 'react';
import { salveDocument } from '../../firebase/FirebaseStore';
import { AuthContext } from '../../context/AuthContext';

import {
	Container,
	FormLogo,
	FormTask,
	FormInput,
	FormStatus,
	FormOption,
	FormSubmit,
} from './styles';

export const AppFormTask = (props) => {
	const currentUser = useContext(AuthContext);

	const [author, setAuthor] = useState(props.author || '');
	const [title, setTitle] = useState(props.title || '');
	const [description, setDescription] = useState(props.description || '');
	const [status, setStatus] = useState('pending');

	const options = [
		{ value: 'pending', name: 'Pendente' },
		{ value: 'progress', name: 'Andamento' },
		{ value: 'finished', name: 'Finalizada' },
	];

	const handleSubmit = (event) => {
		event.preventDefault();

		salveDocument(currentUser.uid, {
			author: author,
			title: title,
			description: description,
			status: status,
		});

		setStates();
		alert('Documento salvo com sucesso!');
	};
	const setStates = () => {
		setAuthor('');
		setTitle('');
		setDescription('');
		setStatus('');
	};

	return (
		<>
			<Container>
				<FormLogo>
					<img src='./assets/logo-white.png' alt='Logo Taugor' />
				</FormLogo>
				<FormTask>
					<FormInput
						type='text'
						placeholder='Responsável da tarefa'
						value={author}
						onChange={(event) => setAuthor(event.target.value)}
					/>
					<FormInput
						type='text'
						placeholder='Título da tarefa'
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
					<FormInput
						type='text'
						placeholder='Descrição da tarefa'
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
					<FormStatus
						value={status}
						onChange={(event) => setStatus(event.target.value)}
					>
						{options.map((option) => {
							return (
								<FormOption
									key={option.value}
									value={option.value}
								>
									{option.name}
								</FormOption>
							);
						})}
					</FormStatus>
					<FormSubmit onClick={handleSubmit}>
						{props.nameButton || 'EDITAR'}
					</FormSubmit>
				</FormTask>
			</Container>
		</>
	);
};
