import React, { useState } from 'react';
import { authResetPassword } from '../../firebase/FirebaseAuth';

import {
	ModalContainer,
	ModalContent,
	ModalHeader,
	ModalTitle,
	ModalMessage,
	ModalBody,
	ModalEmail,
	ModalButton,
} from './styles';

export const AppModal = ({ setShowModal }) => {
	const [email, setEmail] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!email) alert('Digite seu email!');

		await authResetPassword(email);
		setShowModal(false);
	};
	return (
		<>
			<ModalContainer>
				<ModalContent>
					<ModalHeader>
						<ModalTitle>Redefinir senha</ModalTitle>
						<ModalMessage>
							Será enviado um email para você redefinir sua senha!
							<br />
							<strong> Verifique a caixa de spam!!!</strong>
						</ModalMessage>
					</ModalHeader>

					<ModalBody>
						<ModalEmail
							onChange={(event) => {
								setEmail(event.target.value);
							}}
							value={email}
							type='email'
							required
							placeholder='Digite seu email...'
						/>
						<ModalButton type='submit' send onClick={handleSubmit}>
							Enviar
						</ModalButton>
						<ModalButton
							onClick={(event) => {
								event.preventDefault();
								setShowModal(false);
							}}
						>
							Cancelar
						</ModalButton>
					</ModalBody>
				</ModalContent>
			</ModalContainer>
		</>
	);
};
