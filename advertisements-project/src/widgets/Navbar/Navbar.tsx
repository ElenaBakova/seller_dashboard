import React from "react";

import {AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import './Navbar.css';
import routesConfig from "../../app/routes/config.ts";

const pages = [
    {text: "Объявления", href: routesConfig["advertisements"].path},
    {text: "Заказы", href: routesConfig["orders"].path},
];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar className={'appbarWrapper'} position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="menu-appbar"
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
                            sx={{display: {xs: 'block', md: 'none'}}}
                        >
                            {pages.map((item, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Link className={'navbarLink'} sx={{my: 1, textAlign: 'center'}}
                                          href={item.href}>{item.text}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((item, index) => (
                            <Button
                                className={'navbarLink'}
                                key={index}
                                onClick={handleCloseNavMenu}
                                href={item.href}
                                sx={{my: 1, color: 'white', display: 'block'}}
                            >
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;