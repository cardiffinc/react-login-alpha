import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router';
import './styles.css'

function Home() {
    const history = useHistory();
    const {name} = JSON.parse(localStorage.getItem('currentDarthUser'));
    const handleLogout = () => {
        try{
            localStorage.removeItem('currentDarthUser');
        } catch(error){
            console.log(error)
        }
        history.push('/login')
    }
    return (
        <div className="homeHolder">
            <h1 style={{color:'#ff4747'}}>Welcome, {name}!</h1>
            <Button 
                variant="outlined" 
                color="secondary"
                onClick={handleLogout}>
                Logout
            </Button>
            <div className='homeFooter'>
                UI designed by <a href="https://dribbble.com/shots/11879454-Sign-Up-Form" target="_blank">Natalia K</a>. React Template by <a href="https://github.com/cardiffinc" target="_blank">sjoshuadarth</a>. 
            </div>
        </div>
    )
}

export default Home
