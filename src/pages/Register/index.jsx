import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authCreateUser } from '../../firebase/FirebaseAuth';
// import { insertDataUser } from '../../firebase/FirebaseStore';

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

export const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate('');

	const handleRegister = async (event) => {
		event.preventDefault();
		const { user } = await authCreateUser(email, password);

		if (user) {
			navigate('/alltask');
		}
		setStates();
	};

	const setStates = () => {
		setName('');
		setEmail('');
		setPassword('');
	};
	const handleName = (event) => {
		setName(event.target.value);
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
					<Form onSubmit={handleRegister}>
						<Input
							type='text'
							placeholder='Nome'
							required
							onChange={handleName}
							value={name}
						/>
						<Input
							type='email'
							placeholder='Email'
							required
							onChange={handleEmail}
							value={email}
						/>
						<Input
							type='password'
							placeholder='Senha'
							required
							onChange={handlePassword}
							value={password}
						/>

						<Button>CADASTRAR</Button>
					</Form>
				</Main>

				<Footer>
					<Text>
						Já possui uma conta?
						<Link to='/login'>Login</Link>
					</Text>
				</Footer>
			</Content>
		</Container>
	);
};
