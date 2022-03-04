import { createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import safetyStyles from './safetystyles'

function Safety() {

    const fontTheme = createTheme({
        typography: {
            fontFamily: "Fira Sans"
        }
    })

    const classes = safetyStyles()

  return (
      <ThemeProvider theme={fontTheme}>
            <div className={classes.safetyContainer}>
                <h3 className={classes.safetyHeading1}>COVID-19 Transit Safety</h3>
                <h5 className={classes.safetyHeading2}>Learn how we are working in many ways to keep our community safe</h5>
                <button className={classes.learnMoreBtn}><a target="_blank" className={classes.link}  href='https://www.translink.ca/rider-guide/coronavirus-precautions'>Learn More</a></button>
            </div>
      </ThemeProvider>

  )
}

export default Safety