import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import "../App.css"
function Form() {
    const [name, setName] = useState('');
    const [Fruit, setFruit] = useState('');

    const handleChange = (event) => {
        setFruit(event.target.value);
      };
    
    return (
        <div>
            <h1>Enter your name and favourite fruit:</h1>
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <FormControl  sx={{ m: 1, minWidth: 190 }}>
                <InputLabel id="demo-simple-select-label">Fruit</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Fruit}
                    label="Fruit"
                    onChange={handleChange}
                >
                    <MenuItem value="Apple">Apple</MenuItem>
                    <MenuItem value="Mango">Mango</MenuItem>
                    <MenuItem value="Orange">Orange</MenuItem>
                    <MenuItem value="PineApple">PineApple</MenuItem>
                </Select>
            </FormControl>
            <br></br>
            <Button variant="contained" onClick={ ()=>
            {alert("Hello "+name+"!! YourFavorite fruits "+Fruit);}
            }>Submit</Button>
        </div>
    );
}

export default Form;
