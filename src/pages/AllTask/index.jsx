import React, { useState } from 'react';
import { AppHeader } from '../../components/AppHeader';
import { AppMain } from '../../components/AppMain';

import { Container } from './styles';

export const AllTask = () => {
	const [search, setSearch] = useState('');

	const handleChangeSearch = (event) => {
		setSearch(event.target.value);
	};

	return (
		<>
			<Container>
				<AppHeader
					search={true}
					hideLogo={true}
					searching={search}
					handleChangeSearch={handleChangeSearch}
				/>
				<AppMain searching={search} />
			</Container>
		</>
	);
};
