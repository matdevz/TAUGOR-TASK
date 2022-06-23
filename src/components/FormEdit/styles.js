import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	margin: 150px auto;
	background-color: #2981c4;
	max-width: 520px;

	@media (max-width: 600px) {
		margin: 150px 20px;
	}
`;
export const FormLogo = styled.div`
	width: 300px;

	> img {
		width: 100%;
	}
	@media (max-width: 400px) {
		width: 250px;
		padding: 30px 0px;
	}
`;
export const FormTask = styled.form`
	display: flex;
	flex-direction: column;
	gap: 3px;
	width: 70%;
	padding-bottom: 30px;

	@media (max-width: 400px) {
		width: 90%;
	}
`;
export const FormInput = styled.input`
	width: 100%;
	font-size: 18px;
	outline: none;
	padding: 5px;
`;
export const FormStatus = styled.select`
	font-size: 18px;
	outline: none;
	padding: 5px;
`;
export const FormOption = styled.option`
	font-size: 18px;
	outline: none;
	padding: 5px;
`;
export const FormSubmit = styled.button`
	font-size: 18px;
	outline: none;
	padding: 5px;
	border: none;

	color: white;
	background-color: #0057af;
	font-weight: bold;
	transition: 0.3s;

	&:hover {
		background-color: #003b77;
	}
`;
