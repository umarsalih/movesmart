import React from 'react'
import { Card, CardContent, Typography, Container, Grid } from '@material-ui/core'
import infoAreaStyles from './infoareastyles'

function InfoArea(props) {

  const classes = infoAreaStyles();
  const data = props.items;

  const timeConvert = (n) => {
    var hours = (n/60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${rhours} hour and ${rminutes} mins`
  }

  return (
    <> 
      {data.map(d => (
        <Container className={classes.bigContainer}  maxWidth='lg'>
        <Typography variant='h6' align='center'>
          {d.RouteNo} - {d.RouteName}
        </Typography>
        <Grid id="scrollArea" className={classes.cardGrid} container>
          {d.Schedules.map(schedule => (
            <Grid item xs={12} sm={6} md={4}>
            <div id='ssl' className={classes.cardHolder}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
              <Typography align='left' variant='h6' gutterbottom>
                  {schedule.CancelledTrip ? <h6 style={{color: "red"}}>Cancelled</h6> : <h4 style={{color: "green"}}>Confirmed</h4>}
                </Typography>
                <Typography>
                  {schedule.ExpectedCountdown < 10 ? <h4 style={{color: "orange"}}>ARRIVING SOON</h4> : null}
                </Typography>
                <Typography align='left' variant='h6' gutterbottom>
                  <b>Arrives in:</b> {schedule.ExpectedCountdown > 60 ? timeConvert(schedule.ExpectedCountdown) : schedule.ExpectedCountdown} mins
                </Typography>

                <Typography align='left' variant='h6' gutterbottom>
                  <b>Exact Arrival time:</b> {schedule.ExpectedLeaveTime.split(" ")[0]}
                </Typography>
              </CardContent>
            </Card>
            </div>

          </Grid>
          ))}
        </Grid>
      </Container>
      ))}
    </>
  )
}

export default InfoArea