import React, { useState } from 'react';
import headerStyles from './headerstyles';

import { Badge, Button ,Container,Typography, CssBaseline, createTheme, ThemeProvider, Box, FilledInput} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const Header = (props) => {

    const [stopNumber, setStopNumber] = useState();
    const [routeNumber, setRouteNumber] = useState();
    
    const submitInfo = () => {
        props.callAPI();
        props.setRootStopNumber("");
        const renderedInfo = document.getElementById("scrollArea")
        renderedInfo.scrollIntoView({behavior: "smooth"})
    }

    //MATERIAL UI STYLES
    const classes = headerStyles();
    const fontTheme = createTheme({
        typography: {
            fontFamily: "Fira Sans"
        }
    })
    const WhiteTextTypography = withStyles({
        root: {
            color: "#FFFFFF",
            fontWeight: `700`
        }
    })(Typography);

    return (
        <div>
        <ThemeProvider theme={fontTheme}>
            <CssBaseline />
            <Box>
            <div className={classes.headerContainer}>
                <div className={classes.headerTexts}>
                <WhiteTextTypography variant='h2' align='left' gutterBottom>
                    Welcome to MoveSmart <br/> by TransLink
                </WhiteTextTypography>

                <WhiteTextTypography variant="h5">
                    An easier way to find your next bus
                </WhiteTextTypography>
                </div>
                <div className={classes.userInput_container}>
                        <FilledInput
                        value={props.rootstopNumber} 
                        onChange={(e) => {props.setRootStopNumber(e.target.value)}}
                        className={classes.formInput} 
                        sx={{mindWidth: 300}} 
                        placeholder='Bus stop number (Eg:  58947)' 

                        />
                        
                        <button onClick={submitInfo} className={classes.findButton}>
                            <WhiteTextTypography variant='p'>
                                Find my Bus!
                            </WhiteTextTypography>
                        </button>

                </div>
            </div>

            </Box>


            </ThemeProvider>
        </div>
    )
}

export default Header;