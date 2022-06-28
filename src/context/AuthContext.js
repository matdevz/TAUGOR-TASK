import React, { useState, useEffect, createContext } from 'react';

import { auth } from '../firebase/FirebaseAuth';
import { AppLoading } from '../components/AppLoading';
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
		return <AppLoading />;
	}

	return (
		<AuthContext.Provider value={currentUser}>
			{children}
		</AuthContext.Provider>
	);
};
