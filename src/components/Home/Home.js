import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router';

function Home() {
    const history = useHistory();
    const handleLogout = () => {
        try{
            localStorage.removeItem('currentDarthUser');
        } catch(error){
            console.log(error)
        }
        history.push('/login')
    }
    return (
        <div>
            <h1>Home</h1>
            <Button onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Home
