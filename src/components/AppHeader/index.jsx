import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../../context/AuthContext';
import { authLogoutUser } from '../../firebase/FirebaseAuth';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

export const AppHeader = (props) => {
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const navigate = useNavigate('');

	const currentUser = useContext(AuthContext);
	useEffect(() => {
		if (!currentUser || currentUser === null) {
			navigate('/login');
		}
	});

	const handleLogout = () => {
		authLogoutUser();
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem onClick={handleLogout}>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<LogoutIcon />
				</IconButton>
				<p>Sair</p>
			</MenuItem>
		</Menu>
	);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar>
					<Toolbar>
						{props.hideLogo ? (
							<Typography
								variant='h6'
								noWrap
								component='div'
								sx={{ display: { xs: 'none', sm: 'block' } }}
							>
								TAUGOR
							</Typography>
						) : (
							<Typography
								variant='h6'
								noWrap
								component='div'
								sx={{ display: { xs: 'block', sm: 'block' } }}
							>
								TAUGOR
							</Typography>
						)}

						{props.search && (
							<Search>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder='Search…'
									inputProps={{ 'aria-label': 'search' }}
								/>
							</Search>
						)}
						<Box sx={{ flexGrow: 1 }} />
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<IconButton
								size='large'
								edge='end'
								aria-label='account of current user'
								aria-controls={menuId}
								aria-haspopup='true'
								color='inherit'
								onClick={handleLogout}
							>
								<LogoutIcon />
							</IconButton>
						</Box>
						<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size='large'
								aria-label='show more'
								aria-controls={mobileMenuId}
								aria-haspopup='true'
								onClick={handleMobileMenuOpen}
								color='inherit'
							>
								<MoreIcon />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
				{renderMobileMenu}
			</Box>
		</>
	);
};