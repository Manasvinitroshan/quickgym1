import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

const Menu = () => {
  return (
    <div className='orange-bg center'>

        <Paper className='white-bg length' elevation={10} >

            <Stack direction = "column" spacing={8} className='center element'>
               
                <button className='buttonClass'>Exercise Available</button>
                <button className='buttonClass'>Workout Tracker</button>
                <button className='buttonClass'>Workout History</button>
                <button className='buttonClass'>Profile</button>
               
            </Stack>

        </Paper>

    </div>
  )
}

export default Menu