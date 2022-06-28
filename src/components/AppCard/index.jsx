import React from 'react';
import { deleteDocumentTask } from '../../firebase/FirebaseStore';
import { deleteFileStorage } from '../../firebase/FirebaseStorage';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export const AppCard = (props) => {
	const navigate = useNavigate('');

	const handleDelete = async () => {
		const confirmDelete = window.confirm('Deseja apagar está tarefa?');
		if (confirmDelete) {
			await deleteDocumentTask(props.id);
			await deleteFileStorage(props.fileRef);
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
						{props.ResponsibleName}
					</Typography>
					<Typography variant='body2'>{props.description}</Typography>
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
					<Button size='small'>
						<ArchiveIcon />
						<Link
							href={props.fileUrl}
							underline='none'
							target='_blank'
						>
							Arquivo
						</Link>
					</Button>
				</CardActions>
			</Card>
		</>
	);
};
