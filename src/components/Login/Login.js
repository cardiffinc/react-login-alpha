import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import artwork from '../../staticAssets/login-artwork.png'
import facebook from '../../staticAssets/facebook.png'
import instagram from '../../staticAssets/instagram.png'
import linkedin from '../../staticAssets/linkedin.png'
import twitter from '../../staticAssets/twitter.png'
import { Avatar, Button, Checkbox, Divider, FormControlLabel, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

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
        marginTop: 15,
    },
    checkFormControlLabel: {
        marginTop: 25,
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
        width: '-webkit-fill-available',
        backgroundColor: '#ff4747',
        textTransform: 'none'
    },
    divider: {
        marginTop: 25,
        marginBottom: 25,
    }
  }));

function Login() {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disableButton, setDisableButton] = useState(true);
    const [error, setError] = useState(null);

    const handleLogin = event => {
        event.preventDefault();
        if(email === 'mail@mail.com' && password === 'password@2021'){
            history.push('/')
        } else setError('Email or Password is incorrect')
    }

    useEffect(() => {
        setError(null);
        if(email !== '' && password !== ''){
            setDisableButton(false)
        } else setDisableButton(true)
    }, [email, password])

    return (
        <div className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item xs={8}>
                    <div className={classes.leftDiv}>
                        <h1>
                            Welcome Back!
                        </h1>
                        <span>Sign in using your socials</span>
                        <Grid container justify="center" className={classes.socialGrid} spacing={2}>
                            <Grid item xs={1}>
                                <Avatar alt="Facebook" src={facebook} />
                            </Grid>
                            <Grid item xs={1}>
                                <Avatar alt="Instagram" src={instagram} />
                            </Grid>
                            <Grid item xs={1}>
                                <Avatar alt="LinkedIn" src={linkedin} />
                            </Grid>
                            <Grid item xs={1}>
                                <Avatar alt="Twitter" src={twitter} />
                            </Grid>
                        </Grid>
                        <span>or use your email and password</span>
                        
                        <form onSubmit={handleLogin}>
                            <div className={classes.inputWrapper}>
                                <TextField 
                                    id="email-input" 
                                    label="Email" 
                                    variant="outlined" 
                                    fullWidth 
                                    color='secondary'
                                    className={classes.authInput} 
                                    onChange={event=>setEmail(event.target.value)}/>
                                <TextField 
                                    id="password-input" 
                                    label="Password" 
                                    variant="outlined" 
                                    fullWidth
                                    color='secondary'
                                    className={classes.authInput} 
                                    onChange={event=>setPassword(event.target.value)}/>
                            </div>
                            <FormControlLabel
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="secondary"
                                        className={classes.checkbox}
                                    />
                                    }
                                    label="Keep me logged in"
                                    className={classes.checkFormControlLabel}
                            />
                            <Button id="signin-button" variant="contained" size="large" color="primary" className={classes.authButton} type="submit" disabled={disableButton}>
                                Sign In
                            </Button>
                            {error && 
                            <p>{error}
                            </p>}
                        </form>
                        <Divider className={classes.divider} />
                        <div>
                            Don't have an account? <Link to='/signup' style={{color: "#ff4747"}}>Sign Up!</Link>
                        </div>
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
