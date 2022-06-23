import React, { useState, useEffect, createContext } from 'react';
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
		return <>loading</>;
	}

	return (
		<AuthContext.Provider value={currentUser}>
			{children}
		</AuthContext.Provider>
	);
};
