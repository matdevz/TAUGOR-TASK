import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from './components/Register';
import GlobalStyles from './styles/GlobalStyles';
import Login from './components/Login/index';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>

			<GlobalStyles />
		</>
	);
}
