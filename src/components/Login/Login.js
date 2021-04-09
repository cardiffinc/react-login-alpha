import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import artwork from '../../staticAssets/login-artwork.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
