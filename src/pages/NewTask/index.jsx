import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppHeader } from '../../components/Header';
import { AppFormTask } from '../../components/Form';

export const NewTask = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) navigate('/login', { replace: true });
	});

	return (
		<>
			<AppHeader routeName='Voltar' routePath='/dashboard' iconBack />
			<AppFormTask nameButton='ADICIONAR' />
		</>
	);
};
