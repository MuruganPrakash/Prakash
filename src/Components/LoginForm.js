import { useState } from 'react';
import  Container  from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import "./style.css";
export default function Login()
{
    const [userName,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [filled,setFilled] = useState("");

    function setValue()
    {
        if(!userName || !password)
        {
            setFilled("Please fill all the fields");
        }
        else
        {
            setFilled("");
        }
    }
    return(
        <Container id="contain">
            <h2>Log in</h2>
            <br />
            
            <TextField 
                required size="medium" label="Username" value={userName} variant='outlined'
                onChange={(e)=>{setUsername(e.target.value)}}>
            </TextField>
            <br />
            <br />
            
            <TextField 
                required size="medium" label="Password" value={password} type='password'
                onChange={(e)=>{setPassword(e.target.value)}}>
            </TextField>
            <br/><br/>

            {filled && <p style={{color:'red'}}>{filled}</p>}

            <Button variant="contained" type='submit' onClick={setValue}>Login</Button>
        </Container>
    )
}