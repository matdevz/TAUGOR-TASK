import React from 'react';
import { AppHeader } from '../../components/AppHeader/index';
import { AppButton } from '../../components/AppButton/index';

export const NewTask = () => {
	return (
		<>
			<AppHeader />

			<AppButton back pathName='/alltask' />
		</>
	);
};
