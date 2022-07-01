import styled from 'styled-components';

export const ModalContainer = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(5px);
	padding: 10px;
`;
export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	max-width: 460px;
	width: 100%;

	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;

	color: black;
	border-radius: 10px;
	background-color: white;
`;
export const ModalHeader = styled.header`
	padding: 20px;
`;
export const ModalTitle = styled.h2`
	color: #2981c4;
`;
export const ModalMessage = styled.p`
	font-size: 18px;
`;
export const ModalBody = styled.form`
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 20px;
`;
export const ModalEmail = styled.input`
	padding: 8px;
	outline: none;
	font-size: 18px;
`;
export const ModalButton = styled.button`
	background-color: ${(props) =>
		props.send ? '#2981c4' : 'rgb(239, 95, 95)'};
	font-size: 16px;
	font-weight: bold;
	padding: 8px;
	border: none;
	outline: none;
	color: white;
`;
