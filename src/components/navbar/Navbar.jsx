import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Grid, MenuItem, Menu, Typography, BottomNavigation, BottomNavigationAction, useTheme, useMediaQuery, Paper, Icon } from '@material-ui/core';
import { ShoppingCart, LiveHelp, Chat, House } from '@material-ui/icons';
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
      <AppBar className={classes.bottomNav} elevation={0} position="fixed" >
        <Grid container spacing={0} className={classes.bottomNavigation}>
          <Grid item xs={1}>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="#354721"><ShoppingCart /></IconButton>
          </Grid>
          <Grid item xs={1}>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="#354721"><LiveHelp /></IconButton>
          </Grid>
          <Grid item xs={3}>
        <IconButton className={classes.homeImage} component={Link} to="/cart" aria-label="Show cart items" color="#354721"><img src={mobileLogo} /></IconButton>
          </Grid>
          <Grid item xs={1}>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="#354721"><Chat /></IconButton>
          </Grid>
          <Grid item xs={1}>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="#354721"><House /></IconButton>
          </Grid>
        </Grid>
      </AppBar>
      
    )
  }

  return (
    <>
      {isMobile ? (mobileNav()) : (dsktpNav())}
    </>
  )
}

export default Navbar