import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { AuthProvider } from './context/AuthContext';

export default function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route
						exact
						path='*'
						element={<Navigate replace to='/login' />}
					/>
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
				</Routes>
			</AuthProvider>

			<GlobalStyles />
		</>
	);
}
