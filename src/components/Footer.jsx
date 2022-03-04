import React from 'react';
import footerStyles from './footerstyles';
import { Box, Typography } from '@material-ui/core';

function Footer() {

    const classes = footerStyles();

  return (
    <>
        <Box className={classes.footerContainer}>
            <Typography className={classes.footerText} variant='h5' align='center'>
                MoveSmart, made using the TransLink OpenAPI
            </Typography>
        </Box>
    </>
  )
}

export default Footer;