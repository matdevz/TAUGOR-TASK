import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import { AuthProvider } from './context/AuthContext';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AllTask } from './pages/AllTask/index';
export default function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route exact path='/' element={<Navigate to='/login' />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
					<Route exact path='/alltask' element={<AllTask />} />
				</Routes>
			</AuthProvider>

			<GlobalStyles />
		</>
	);
}
