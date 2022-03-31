import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navber = ({ totalItems }) => {
const classes = useStyles();
return(
  <div>
    <AppBar position='fixed' className={classes.appBar} color='inherit'>
      <Toolbar>
        <Typography variant='h6' className={classes.title} color='inherit'>
          <img src={logo} alt="Commerce.js" height='25px'  className={classes.image} />
          Shopping Site
        </Typography>
        <div className={classes.glow} />
       <div className={classes.button}>
         <IconButton aria-label='Show cart item' color='inherit'>
           <Badge badgeContent={2} color="secondary">
             <ShoppingCart />
           </Badge>
         </IconButton>
       </div>
      </Toolbar>

    </AppBar>
  </div>
)
}
export default Navber;
