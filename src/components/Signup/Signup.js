import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import artwork from '../../staticAssets/login-artwork.png'
import facebook from '../../staticAssets/facebook.png'
import instagram from '../../staticAssets/instagram.png'
import linkedin from '../../staticAssets/linkedin.png'
import twitter from '../../staticAssets/twitter.png'
import { Avatar, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import TextInput from '../TextInput/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
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
        marginTop: 20,
        marginBottom: 20
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
    buttonGrid:{
        paddingRight: '5em',
        paddingLeft: '5em'
    },
    authButton: {
        marginTop: 25,
        width: '-webkit-fill-available',
        textTransform: 'none',
    },
    divider: {
        marginTop: 25,
        marginBottom: 25,
    },
    heading: {
        color: '#ff4747'
    }
  }));

function Signup() {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disableButton, setDisableButton] = useState(true);
    const [error, setError] = useState(null);

    const handleSignup = event => {
        event.preventDefault();
    }

    useEffect(() => {
        setError(null);
        if(name !== '' && email !== '' && password !== ''){
            setDisableButton(false)
        } else setDisableButton(true)
    }, [name, email, password])

    const configNameInput = {
        id:"name-input",
        label:"Name"
    }

    const configEmailInput = {
        id:"email-input", 
        label:"Email"
    }

    const configPasswordInput = {
        id:"password-input",
        label:"Password"
    }

    return (
        <div className={classes.root}>
            <Grid container alignItems="center">
                <Grid item xs={8}>
                    <div className={classes.leftDiv}>
                        <h1 className={classes.heading}>
                            Create Account
                        </h1>
                        <Grid container 
                            justify="center" 
                            className={classes.socialGrid} 
                            spacing={2}>
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
                        <span>or use your email for registration</span>
                        
                        <form onSubmit={handleSignup}>
                            <div className={classes.inputWrapper}>
                                <TextInput 
                                    {...configNameInput } 
                                    handleChange={event=>setName(event.target.value)}/>  
                                <TextInput 
                                    {...configEmailInput } 
                                    handleChange={event=>setEmail(event.target.value)}/>
                                <TextInput 
                                    {...configPasswordInput } 
                                    handleChange={event=>setPassword(event.target.value)}/>
                            </div>
                            <FormControlLabel
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="secondary"
                                        className={classes.checkbox}
                                    />
                                    }
                                    label="I agree to the Terms and Privacy Conditions"
                                    className={classes.checkFormControlLabel}
                            />
                            {error && 
                            <p>{error}
                            </p>}
                            <Grid container alignItems="center" spacing={2} className={classes.buttonGrid}>
                                <Grid item xs={6}>
                                    <Button 
                                        fullWidth   
                                        id="signup-button" 
                                        variant="contained" 
                                        size="large" 
                                        color="secondary" 
                                        className={classes.authButton} 
                                        type="submit" 
                                        style={{color: '#fff'}}
                                        disabled={disableButton}>
                                        Sign Up
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button 
                                        fullWidth
                                        id="signin-button" 
                                        variant="outlined" 
                                        size="large" 
                                        color="secondary" 
                                        className={classes.authButton} 
                                        type="button" 
                                        onClick={()=>history.push('/login')}>
                                        Sign In
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.rightDiv}></div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Signup