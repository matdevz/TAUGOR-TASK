import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export const AppButton = () => {
	return (
		<Box
			sx={{ '& > :not(style)': { m: 1 } }}
			style={{ position: 'fixed', bottom: '10px', right: '10px' }}
		>
			<Fab color='primary' aria-label='add'>
				<AddIcon />
			</Fab>
		</Box>
	);
};
