import React from 'react'
import {Avatar, Typography, Grid, Card, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

import './ProfileDisplay.css'
import Context from '../../utils/Context'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    height: '90px',
    width: '90px'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  attr: {
    marginTop: theme.spacing(1),
    fontSize: 16
  },
  buttonProgress: {
    color: red[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  }
}))

const ProfileDisplay = () => {
  
  const classes = useStyles()

  const { 
    firstName, 
    lastName, 
    title, 
    email, 
    phone, 
    location, 
    timezone, 
    isLoading
   } = React.useContext(Context)

  return (    
    <Card className="card">
      {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* add photo here */}
          userPic
        </Avatar>
      </div>
      <div className = {classes.form}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography color="textSecondary" variant="h5" className={classes.attr}>Name</Typography>
            <Typography color="textSecondary" variant="h5" className={classes.attr}>Title</Typography>
            <Typography color="textSecondary" variant="h5" className={classes.attr}>Email</Typography>
            <Typography color="textSecondary" variant="h5" className={classes.attr}>Phone</Typography>
            <Typography color="textSecondary" variant="h5" className={classes.attr}>Location</Typography>
            <Typography color="textSecondary" variant="h5" className={classes.attr}>Time Zone</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.attr}>
              { firstName + ' ' + lastName }
            </Typography>
            <Typography variant="h5" className={classes.attr}>
              { title }
            </Typography>
            <Typography variant="h5" className={classes.attr}>
              { email }
            </Typography>
            <Typography variant="h5" className={classes.attr}>
              { phone }
            </Typography>
            <Typography variant="h5" className={classes.attr}>
              { location }
            </Typography>
            <Typography variant="h5" className={classes.attr}>
              { timezone }
            </Typography>
            </Grid>
          </Grid>
      </div>
    </Card>
  )
}

export default ProfileDisplay