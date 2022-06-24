import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const AppCard = (props) => {
	return (
		<>
			<Card sx={{ minWidth: 275 }} style={{ marginTop: '20px' }}>
				<CardContent>
					<Typography
						sx={{ fontSize: 14 }}
						color={props.status}
						gutterBottom
					>
						{props.statusName}
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
					<Button size='small'>
						<EditIcon />
						Editar
					</Button>
					<Button size='small'>
						<DeleteIcon />
						APAGAR
					</Button>
				</CardActions>
			</Card>
		</>
	);
};
