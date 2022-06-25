import React from 'react';
import { AppHeader } from '../../components/AppHeader/index';
import { AppButton } from '../../components/AppButton/index';
import { AppForm } from '../../components/AppForm/index';

export const EditTask = () => {
	return (
		<>
			<AppHeader />
			<AppForm edit />
			<AppButton back pathName='/alltask' />
		</>
	);
};
