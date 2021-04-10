import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    authInput: {
        marginTop: 15,
    }
  }));

function TextInput({handleChange, id, label}) {
    const classes = useStyles();
    return (
        <TextField 
            id={id} 
            label={label} 
            variant="outlined" 
            fullWidth 
            color='secondary'
            className={classes.authInput} 
            onChange={handleChange}/>
    )
}

export default TextInput
