import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, BottomNavigation, BottomNavigationAction, useTheme, useMediaQuery } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/Asset7.png'
import mobileLogo from '../../assets/Asset10.png'
import useStyles from './styles'

const Navbar = ({totalItems}) => {

  const classes = useStyles();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const dsktpNav = () => {
    return(
      <AppBar className={classes.appBar} elevation={0} position="fixed" >
          <Toolbar>
            <Typography component={Link} to="/" >
              <img className={classes.logo} src={logo} alt='Frank Albie' />
            </Typography>
            <Typography component={Link} to="/" className={classes.links}>Shop</Typography>
            <Typography component={Link} to="/" className={classes.links}>About</Typography>
            <Typography component={Link} to="/" className={classes.links}>Contact</Typography>
                {location.pathname === '/' && (
                  <div className={classes.cart}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="#354721">
                      <Badge badgeContent={totalItems} color="#F7DACC">
                        <ShoppingCart />
                      </Badge>
                    </IconButton>
                  </div>
                  )}

          </Toolbar>
        </AppBar>
    )
  };

  const mobileNav = () => {
    return(
      <BottomNavigation id='devicesNav'>
          <BottomNavigationAction component={Link} to='/' label="Shop" icon={<ShoppingCart />} />
          <BottomNavigationAction component={Link} to='/' label="About" icon={<ShoppingCart />} />
          <BottomNavigationAction component={Link} to='/' label="Home" icon={<img src={mobileLogo} alt='Frank Albie' />} />
          <BottomNavigationAction component={Link} to='/' label="Contact" icon={<ShoppingCart />} />
          <BottomNavigationAction component={Link} to='/' label="Cart" icon={<ShoppingCart />} />
        </BottomNavigation>
    )
  }

  return (
    <>
      {isMobile ? (mobileNav()) : (dsktpNav())}
    </>
  )
}

export default Navbar