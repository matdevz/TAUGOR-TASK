import styled from 'styled-components';
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;

	color: white;
	width: 100vw;
	height: 60px;
	background-color: #2981c4;
`;
export const HeaderInfo = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`;
export const HeaderLogo = styled.div`
	display: flex;
	align-items: center;

	padding: 10px;

	width: 140px;
	height: 100%;

	> img {
		width: 100%;
	}
`;

export const Navigation = styled.nav`
	height: 100%;
`;
export const NavButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;
	padding: 0 20px;
	font-size: 16px;
	font-weight: bold;
	border: none;
	border-left: 1px solid rgba(242, 242, 242, 0.5);

	color: white;
	background-color: #2981c4;

	&:hover {
		background-color: #2991c4;
	}
`;
export const NavButtonIcon = styled.div`
	width: 30px;
	height: 30px;
	margin-right: 5px;
`;
