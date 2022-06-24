import React from 'react';
import { AppHeader } from '../../components/AppHeader';
import { AppMain } from '../../components/AppMain';

import { Container } from './styles';

export const AllTask = () => {
	return (
		<>
			<Container>
				<AppHeader />
				<AppMain />
			</Container>
		</>
	);
};
