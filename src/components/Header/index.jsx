import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AddCircle, ArrowBack } from '../../styles/Icons';

import {
	Header,
	HeaderInfo,
	HeaderLogo,
	Navigation,
	NavButton,
	NavButtonIcon,
} from './styles';

export const AppHeader = (props) => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(props.routePath, { replace: true });
	};
	return (
		<Header>
			<HeaderInfo>
				<HeaderLogo>
					<img src='./assets/logo-white.png' alt='Logo Taugor' />
				</HeaderLogo>
			</HeaderInfo>

			<Navigation>
				<NavButton onClick={handleNavigate}>
					<NavButtonIcon>
						{props.iconBack ? <ArrowBack /> : <AddCircle />}
					</NavButtonIcon>
					{props.routeName}
				</NavButton>
			</Navigation>
		</Header>
	);
};
