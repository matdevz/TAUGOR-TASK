import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;

	color: white;
	background-color: #2581c4;
`;
export const Content = styled.div`
	max-width: 500px;
	width: 100%;
`;
export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Logo = styled.div`
	width: 400px;
	margin-bottom: 30px;

	> img {
		width: 100%;
	}

	@media (max-width: 400px) {
		width: 250px;
	}
`;
export const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	gap: 8px;
	width: 80%;
`;
export const Input = styled.input`
	font-size: 16px;
	padding: 10px 12px;
	background-color: transparent;
	border: 1px solid #fff;
	color: white;
	outline: none;
	width: 100%;

	&::-webkit-input-placeholder {
		color: white;
	}
`;
export const Button = styled.button`
	font-size: 16px;
	font-weight: bold;
	padding: 10px 12px;
	background-color: #fff;

	color: #2581c4;
	border: none;
	width: 100%;
	transition: 0.3s;

	&:hover {
		color: #2581c4;
		background-color: #d5d5d5;
	}
`;
export const Footer = styled.footer`
	text-align: center;
`;
export const Text = styled.p`
	font-size: 18px;
	margin-top: 30px;

	> a {
		margin-left: 6px;
		color: #fff;
	}
`;
