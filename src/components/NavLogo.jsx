import React from 'react'
import logo from "../assets/logo.png";
import navlogoStyles from './navlogostyles';

import { Box } from '@material-ui/core';

function NavLogo() {

    const classes = navlogoStyles();

  return (
    // <div>
    //     <img src={logo}></img>
    // </div>
    <Box>
        <div className={classes.logoContainer}>
            <img className={classes.logoImage} src={logo}></img>
        </div>
    </Box>
  )
}

export default NavLogo