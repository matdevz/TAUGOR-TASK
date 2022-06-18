import React from 'react';
import { Link } from 'react-router-dom';

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

const Register = () => {
	return (
		<Container>
			<Content>
				<Header>
					<Logo>
						<img src='./assets/logo-white.png' alt='' />
					</Logo>
				</Header>
				<Main>
					<Form>
						<Input type='text' placeholder='Nome' />
						<Input type='email' placeholder='Email' />
						<Input type='password' placeholder='Senha' />

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

export default Register;
