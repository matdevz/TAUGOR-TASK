import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppModal } from '../../components/AppModal';
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
	const [loading, setLoanding] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showModal, setShowModal] = useState(false);

	const navigate = useNavigate('');

	useEffect(() => {
		if (!loading && localStorage.getItem('token') !== null) {
			navigate('/alltask');
		}
	}, [loading, navigate]);

	const handleLogin = async (event) => {
		event.preventDefault();
		setLoanding(true);
		const user = await authLoginUser(email, password);

		if (user) {
			localStorage.setItem('token', user.accessToken);
			localStorage.setItem('userUid', user.uid);

			navigate('/alltask');
			setLoanding(false);
		}
		setStates();
	};

	const setStates = () => {
		setEmail('');
		setPassword('');
	};

	return (
		<Container>
			{showModal && <AppModal setShowModal={setShowModal} />}

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
							onChange={(event) => {
								setEmail(event.target.value);
							}}
							required
						/>
						<Input
							onChange={(event) => {
								setPassword(event.target.value);
							}}
							type='password'
							name='password'
							placeholder='Password'
							minLength='6'
							required
						/>
						<Button>ENTRAR</Button>
					</Form>
				</Main>

				<Footer>
					<Text>
						Não possui uma conta?
						<Link to='/register'>Criar</Link>
						<br />
						Esqueceu a senha?
						<Link to='/login' onClick={() => setShowModal(true)}>
							Redefinir senha
						</Link>
					</Text>
				</Footer>
			</Content>
		</Container>
	);
};
