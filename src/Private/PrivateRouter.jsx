import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ children, redirectTo }) => {
	const isAuthenticated = localStorage.getItem('token') !== null;

	return isAuthenticated ? children : <Navigate to={redirectTo} />;
};
