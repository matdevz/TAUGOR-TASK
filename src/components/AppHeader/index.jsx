import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authLogoutUser } from '../../firebase/FirebaseAuth';

import { Search, SearchIconWrapper, StyledInputBase } from './styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';

export const AppHeader = (props) => {
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const navigate = useNavigate('');
	const handleLogout = () => {
		localStorage.removeItem('userUid');
		localStorage.removeItem('token');
		authLogoutUser();
		navigate('/login');
	};

	const defineVisibilityLogo = props.hideLogo
		? {
				display: {
					xs: 'none',
					sm: 'block',
				},
		  }
		: {
				display: {
					xs: 'block',
					sm: 'block',
				},
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
			onClose={() => {
				setMobileMoreAnchorEl(null);
			}}
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
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={defineVisibilityLogo}
						>
							TAUGOR
						</Typography>

						{props.search && (
							<Search>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
								<StyledInputBase
									value={props.searching}
									onChange={props.handleChangeSearch}
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
								onClick={(event) => {
									setMobileMoreAnchorEl(event.currentTarget);
								}}
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
