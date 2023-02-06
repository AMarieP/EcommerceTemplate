import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/Asset1.png'
import useStyles from './styles'

const Navbar = ({totalItems}) => {

  const classes = useStyles();
  const location = useLocation();

  return (
    <>
        {/* <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
                </Typography>
                <div className={classes.grow}/>
                {location.pathname === '/' && (
                  <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                      <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                      </Badge>
                    </IconButton>
                  </div>
                  )}
            </Toolbar>
        </AppBar> */}

        {/* <AppBar>
          <Toolbar>
            <Typography component={Link} to="/" >
              <img src={logo} alt='Frank Albie' />
            </Typography>
            <Typography component={Link} to="/">Shop</Typography>
            <Typography component={Link} to="/">About</Typography>
            <Typography component={Link} to="/">Contact</Typography>
                {location.pathname === '/' && (
                  <div>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                      <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                      </Badge>
                    </IconButton>
                  </div>
                  )}

          </Toolbar>
        </AppBar> */}

        {/* <BottomNavigation id='devicesNav'>
          <BottomNavigationAction component={Link} to='/' label="Shop" icon={<ShoppingCart />} />
          <BottomNavigationAction component={Link} to='/' label="About" icon={<ShoppingCart />} />
          <BottomNavigationAction component={Link} to='/' label="Home" icon={<ShoppingCart />} />
          <BottomNavigationAction component={Link} to='/' label="Contact" icon={<ShoppingCart />} />
          <BottomNavigationAction component={Link} to='/' label="Cart" icon={<ShoppingCart />} />
        </BottomNavigation> */}
    </>
  )
}

export default Navbar