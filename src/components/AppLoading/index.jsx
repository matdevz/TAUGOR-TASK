import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const AppLoading = () => {
	return (
		<Box
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'white',
				width: '100vw',
				height: '100vh',
			}}
		>
			<CircularProgress />
		</Box>
	);
};
