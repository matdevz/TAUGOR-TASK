import React from 'react';
import useDrivePicker from 'react-google-drive-picker/dist';
import Button from '@mui/material/Button';

export const AppDrive = (props) => {
	const [openPicker] = useDrivePicker();

	const handleOpenPicker = () => {
		openPicker({
			clientId: process.env.REACT_APP_DRIVE_CLIENT_ID,
			developerKey: process.env.REACT_APP_DRIVE_DEVELOPER_KEY,
			viewId: 'DOCS',
			// token: process.env.REACT_APP_DRIVE_TOKEN,
			showUploadView: true,
			showUploadFolders: true,
			supportDrives: true,
			multiselect: true,

			callbackFunction: (data) => {
				if (data.action === 'picked') {
					props.setFileDrive(data.docs[0].url);
					console.log(data);

					alert('Arquivo selecionado do Drive!');
				}
			},
		});
	};

	return (
		<>
			<Button
				variant='outlined'
				style={{
					width: '50%',
				}}
				onClick={handleOpenPicker}
			>
				UPLOAD DRIVE
			</Button>
		</>
	);
};
