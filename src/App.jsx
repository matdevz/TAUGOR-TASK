import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import { AuthProvider } from './context/AuthContext';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AllTask } from './pages/AllTask/index';
import { NewTask } from './pages/NewTask/index';
import { PrivateRouter } from './Private/PrivateRouter';
import { EditTask } from './pages/EditTask/index';
export default function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route
						exact
						path='/'
						element={<Navigate to='/register' />}
					/>
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
					<Route
						exact
						path='/alltask'
						element={
							<PrivateRouter redirectTo='/login'>
								<AllTask />
							</PrivateRouter>
						}
					/>
					<Route
						exact
						path='/newtask'
						element={
							<PrivateRouter redirectTo='/login'>
								<NewTask />
							</PrivateRouter>
						}
					/>
					<Route
						exact
						path='/edittask/:id'
						element={
							<PrivateRouter redirectTo='/login'>
								<EditTask />
							</PrivateRouter>
						}
					/>
				</Routes>
			</AuthProvider>

			<GlobalStyles />
		</>
	);
}
