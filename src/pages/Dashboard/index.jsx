import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppHeader } from '../../components/Header';
import { AppMain } from '../../components/Main';

// import { AuthContext } from '../../context/AuthContext';

export const Dashboard = () => {
	// const currentUser = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) navigate('/login', { replace: true });
	});

	return (
		<>
			<AppHeader routeName='Nova Tarefa' routePath='/newtask' />
			<AppMain />
		</>
	);
};
