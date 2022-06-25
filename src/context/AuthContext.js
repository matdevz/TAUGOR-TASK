import React, { useState, useEffect, createContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { auth } from '../firebase/FirebaseAuth';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
	}, []);

	if (loading) {
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
	}

	return (
		<AuthContext.Provider value={currentUser}>
			{children}
		</AuthContext.Provider>
	);
};
