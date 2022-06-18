import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth } from '../firebase/FirebaseAuth';

export const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState('');

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});
	}, []);

	return (
		<AuthContext.Provider value={currentUser}>
			{children}
		</AuthContext.Provider>
	);
};
