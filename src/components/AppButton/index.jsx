import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export const AppButton = (props) => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(props.pathName);
	};

	return (
		<Box
			onClick={handleNavigate}
			sx={{ '& > :not(style)': { m: 1 } }}
			style={{ position: 'fixed', bottom: '10px', right: '10px' }}
		>
			<Fab color='primary' aria-label='add'>
				{props.back ? <ArrowBackIcon /> : <AddIcon />}
			</Fab>
		</Box>
	);
};
