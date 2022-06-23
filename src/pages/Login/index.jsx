import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authLoginUser } from '../../firebase/FirebaseAuth';

import {
	Container,
	Content,
	Header,
	Logo,
	Main,
	Form,
	Input,
	Button,
	Footer,
	Text,
} from './styles';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate('');

	const handleLogin = async (event) => {
		event.preventDefault();
		const { user } = await authLoginUser(email, password);

		if (user) {
			localStorage.setItem('token', user.accessToken);

			navigate('/dashboard', { replace: true });
		} else {
			alert('Não foi possível fazer login');
		}

		setStates();
	};
	const setStates = () => {
		setEmail('');
		setPassword('');
	};

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};
	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	return (
		<Container>
			<Content>
				<Header>
					<Logo>
						<img src='./assets/logo-white.png' alt='' />
					</Logo>
				</Header>
				<Main>
					<Form onSubmit={handleLogin}>
						<Input
							type='email'
							name='email'
							placeholder='Email'
							onChange={handleEmail}
						/>
						<Input
							onChange={handlePassword}
							type='password'
							name='password'
							placeholder='Password'
						/>
						<Button>ENTRAR</Button>
					</Form>
				</Main>

				<Footer>
					<Text>
						Não possui uma conta?
						<Link to='/register'>Criar</Link>
					</Text>
				</Footer>
			</Content>
		</Container>
	);
};
