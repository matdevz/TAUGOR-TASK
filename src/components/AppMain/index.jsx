import React from 'react';
import { AppCard } from '../AppCard';
import { AppButton } from '../AppButton';
import Container from '@mui/material/Container';

export const AppMain = () => {
	return (
		<>
			<Container maxWidth='lg' style={{ paddingTop: '80px' }}>
				<AppCard
					status='success.main'
					statusName='FINALIZADA'
					titleTask='Tela de login e cadastro'
					AuthorName='Tony Stark'
				/>
				<AppCard
					status='primary.main'
					statusName='ANDAMENTO'
					titleTask='Fazer o projeto'
					AuthorName='Pedro Pedreiro'
				/>
				<AppCard
					status='warning.main'
					statusName='PENDENTE'
					titleTask='Concluir o teste'
					AuthorName='Mateus Henrique'
				/>
				<AppCard
					status='success.main'
					statusName='FINALIZADA'
					titleTask='Tela de login e cadastro'
					AuthorName='Tony Stark'
				/>
				<AppCard
					status='primary.main'
					statusName='ANDAMENTO'
					titleTask='Fazer o projeto'
					AuthorName='Pedro Pedreiro'
				/>
				<AppCard
					status='warning.main'
					statusName='PENDENTE'
					titleTask='Concluir o teste'
					AuthorName='Mateus Henrique'
				/>{' '}
				<AppCard
					status='success.main'
					statusName='FINALIZADA'
					titleTask='Tela de login e cadastro'
					AuthorName='Tony Stark'
				/>
				<AppCard
					status='primary.main'
					statusName='ANDAMENTO'
					titleTask='Fazer o projeto'
					AuthorName='Pedro Pedreiro'
				/>
				<AppCard
					status='warning.main'
					statusName='PENDENTE'
					titleTask='Concluir o teste'
					AuthorName='Mateus Henrique'
				/>{' '}
				<AppCard
					status='success.main'
					statusName='FINALIZADA'
					titleTask='Tela de login e cadastro'
					AuthorName='Tony Stark'
				/>
				<AppCard
					status='primary.main'
					statusName='ANDAMENTO'
					titleTask='Fazer o projeto'
					AuthorName='Pedro Pedreiro'
				/>
				<AppCard
					status='warning.main'
					statusName='PENDENTE'
					titleTask='Concluir o teste'
					AuthorName='Mateus Henrique'
				/>
				<AppButton pathName='/newtask' />
			</Container>
		</>
	);
};
