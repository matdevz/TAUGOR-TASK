import React, { useState } from 'react';
import useDrivePicker from 'react-google-drive-picker/dist';

export const AppDrive = () => {
	const [openPicker] = useDrivePicker();
	const [links, setLinks] = useState([]);

	const handleOpenPicker = () => {
		openPicker({
			clientId: process.env.REACT_APP_DRIVE_CLIENT_ID,
			developerKey: process.env.REACT_APP_DRIVE_DEVELOPER_KEY,
			viewId: 'DOCS',
			token: process.env.REACT_APP_DRIVE_TOKEN,
			showUploadView: true,
			showUploadFolders: true,
			supportDrives: true,
			multiselect: true,

			callbackFunction: (data) => {
				if (data.action === 'cancel') {
					console.log('User clicked cancel/close button');
				}
				if (data.action === 'picked') {
					data.docs.map((doc) => setLinks([...links, doc]));
				}
				console.log(data);
			},
		});
	};

	return (
		<>
			<div style={{ textAlign: 'center' }}>
				<button onClick={handleOpenPicker}>Click me!</button>

				<div>
					{links.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							Click me
						</a>
					))}
				</div>
			</div>
		</>
	);
};
