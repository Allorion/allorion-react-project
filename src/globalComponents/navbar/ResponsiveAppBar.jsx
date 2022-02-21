import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PortraitIcon from '@mui/icons-material/Portrait';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {Link} from "react-router-dom";

import ToggleColorMode from "../theme/ToggleColorMode";
import {Grid} from "@mui/material";


const ResponsiveAppBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="static" sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: "10px",
                md: "none",
                xs: "none",
                display: {xs: 'none', md: 'flex', xl: "flex"}
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        {/* Блок меню для десктопов */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                        >
                            ALLORION
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            <Button
                                key='home'
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'text.primary', display: 'block'}}
                            >
                                <Link to="/" style={{
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}>
                                    Главная
                                </Link>
                            </Button>
                        </Box>
                        {/* (конец) Блок меню для десктопов */}

                        {/* Блок меню для смартфонов */}
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >

                                {/*    <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
                                {/*        <Typography textAlign="center">{page}</Typography>*/}
                                {/*    </MenuItem>*/}

                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                        >
                            ALLORION
                        </Typography>
                        {/* (конец) Блок меню для смартфонов */}

                        {/* Блок меню пользователя */}
                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Меню профиля">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem key='profile' onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Профиль</Typography>
                                </MenuItem>
                                <Link to="resume/" style={{
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}>
                                    <MenuItem key='resume' onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Резюме</Typography>
                                    </MenuItem>
                                </Link>
                                <MenuItem key='logout' onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" variant="outlined" color="error">Выйти</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        {/* (конец) Блок меню пользователя */}

                        <ToggleColorMode/>
                    </Toolbar>
                </Container>
            </AppBar>

            <footer style={{
                position: 'fixed',
                left: 0,
                right: 0,
                bottom: 0
            }}>
                <AppBar position="static" sx={{
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    md: "none",
                    xs: "none",
                    display: {xs: 'flex', md: 'none', xl: "none"}
                }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Grid container>
                                <Grid item sm={2} xs={2} sx={{textAlign: 'center'}}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                    >
                                        <Link to="/" style={{
                                            textDecoration: 'none',
                                            color: 'inherit'
                                        }}>
                                            <HomeIcon fontSize="large"/>
                                        </Link>
                                    </IconButton>
                                </Grid>
                                <Grid item sm={2} xs={2} sx={{textAlign: 'center'}}>
                                    <Link to="#" style={{
                                        textDecoration: 'none',
                                        color: 'inherit'
                                    }}>
                                        <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            color="inherit"
                                        >
                                            <NewspaperIcon fontSize="large"/>
                                        </IconButton>
                                    </Link>
                                </Grid>
                                <Grid item sm={4} xs={4} sx={{textAlign: 'center'}}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                    >
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="/static/images/avatar/1.jpg"/>

                                    </IconButton>
                                </Grid>
                                <Grid item sm={2} xs={2} sx={{textAlign: 'center'}}>
                                    <Link to="resume/" style={{
                                        textDecoration: 'none',
                                        color: 'inherit'
                                    }}>
                                        <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            color="inherit"
                                        >
                                            <PortraitIcon fontSize="large"/>
                                        </IconButton>
                                    </Link>
                                </Grid>
                                <Grid item sm={2} xs={2} sx={{textAlign: 'center'}}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                    >
                                        <MonetizationOnIcon fontSize="large"/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AppBar>
            </footer>
        </>
    );
};
export default ResponsiveAppBar;
