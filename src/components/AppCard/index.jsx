import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteDocumentTask } from '../../firebase/FirebaseStore';
import { useNavigate } from 'react-router-dom';

export const AppCard = (props) => {
	const navigate = useNavigate('');

	const handleDelete = async () => {
		const confirmDelete = window.confirm('Deseja apagar está tarefa?');
		if (confirmDelete) {
			await deleteDocumentTask(props.id);
			window.location.reload();
		}
	};
	const handleEdit = () => {
		navigate(`/edittask/${props.id}`);
	};

	return (
		<>
			<Card
				sx={{ minWidth: 275 }}
				style={{ marginTop: '20px' }}
				id={props.id}
			>
				<CardContent>
					<Typography
						sx={{ fontSize: 14 }}
						color={() => {
							if (props.status === 'pending') {
								return 'warning.dark';
							}
							if (props.status === 'progress') {
								return 'info.dark';
							}
							if (props.status === 'finished') {
								return 'success.dark';
							}
						}}
						gutterBottom
					>
						{props.statusName.toUpperCase()}
					</Typography>
					<Typography variant='h5' component='div'>
						{props.titleTask}
					</Typography>
					<Typography sx={{ mb: 1.5 }} color='text.secondary'>
						{props.AuthorName}
					</Typography>
					<Typography variant='body2'>
						Fazer um aplicativo completo usando React, Firebase e
						Material UI
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' onClick={handleEdit}>
						<EditIcon />
						Editar
					</Button>
					<Button size='small' onClick={handleDelete}>
						<DeleteIcon />
						APAGAR
					</Button>
				</CardActions>
			</Card>
		</>
	);
};
