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

const Login = () => {
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
						<Input type='email' placeholder='Email' />
						<Input type='password' placeholder='Senha' />

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

export default Login;
