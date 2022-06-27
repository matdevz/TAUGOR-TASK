import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authCreateUser } from '../../firebase/FirebaseAuth';
import { salveDatasUsers } from '../../firebase/FirebaseStore';

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
	const [loading, setLoanding] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate('');

	useEffect(() => {
		if (!loading && localStorage.getItem('token') !== null)
			navigate('/alltask');
	});

	const handleRegister = async (event) => {
		event.preventDefault();
		setLoanding(true);
		const user = await authCreateUser(email, password);

		if (user) {
			salveDatasUsers(user.uid, { name: name, email: email });
			localStorage.setItem('token', user.accessToken);
			localStorage.setItem('userUid', user.uid);
			navigate('/alltask');
			setLoanding(false);
		}
		setStates();
	};

	const setStates = () => {
		setName('');
		setEmail('');
		setPassword('');
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
							onChange={(event) => {
								setName(event.target.value);
							}}
							value={name}
						/>
						<Input
							type='email'
							placeholder='Email'
							required
							onChange={(event) => {
								setEmail(event.target.value);
							}}
							value={email}
						/>
						<Input
							type='password'
							placeholder='Senha'
							minLength='6'
							required
							onChange={(event) => {
								setPassword(event.target.value);
							}}
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
