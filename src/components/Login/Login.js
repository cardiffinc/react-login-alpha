import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import artwork from '../../staticAssets/login-artwork.png'
import { Avatar, Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    grid: {
        minHeight: '100vh'
    },
    leftDiv: {
        margin: '5em',
    },
    rightDiv: {
        border: 'none',
        height: '100vh',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundImage: `url(${artwork})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    socialGrid: {
        marginTop: 10,
        marginBottom: 10
    },
    inputWrapper: {
        marginLeft: '5em',
        marginRight: '5em'
    },
    authInput: {
        marginTop: 15
    },
    checkFormControlLabel: {
        margin: '0 5em',
        width: 'fit-content',
        display: 'block'
    },
    checkbox: {
        paddingLeft: 0
    },
    authButton: {
        marginTop: 25,
        marginLeft: '5em',
        marginRight: '5em',
        width: '-webkit-fill-available'
    }
  }));

function Login() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item xs={8}>
                    <div className={classes.leftDiv}>
                        <h1>
                            Welcome Back!
                        </h1>
                        <span>Sign in using your socials</span>
                        <Grid container justify="center" className={classes.socialGrid} spacing='2'>
                            <Grid item xs={1}>
                                <Avatar alt="Remy Sharp" src="../../logo.svg" />
                            </Grid>
                            <Grid item xs={1}>
                                <Avatar alt="Remy Sharp" src="../../logo.svg" />
                            </Grid>
                            <Grid item xs={1}>
                                <Avatar alt="Remy Sharp" src="../../logo.svg" />
                            </Grid>
                            <Grid item xs={1}>
                                <Avatar alt="Remy Sharp" src="../../logo.svg" />
                            </Grid>
                        </Grid>
                        <span>or use your email and password</span>
                        <div className={classes.inputWrapper}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth className={classes.authInput}/>
                            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth className={classes.authInput}/>
                        </div>
                        <FormControlLabel
                                control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                    className={classes.checkbox}
                                />
                                }
                                label="Keep me logged in"
                                className={classes.checkFormControlLabel}
                        />
                        <Button variant="contained" size="large" color="primary" className={classes.authButton}>
                            Signin
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.rightDiv}>
                        
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login
