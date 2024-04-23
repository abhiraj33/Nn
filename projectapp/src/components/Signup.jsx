import { Button } from '@mui/material'
import React from 'react'
import { Typography ,TextField} from '@mui/material'

const Signup = () => {
  return (
    <div style={{padding:"5px"}}>
        <br />
        <Typography variant="h2" gutterBottom> <br />
        Signup Page
      </Typography>
      <TextField label="Name:" 
      variant="outlined">
      </TextField>
      <br /><br />
      <TextField label="Email:" 
      variant="outlined">
      </TextField>
      <br /><br />
      <TextField label="Password:" 
      variant="outlined" type='password'>
      </TextField>
      <br /><br />
        <Button variant="contained">Signup</Button>
    </div>
  )
}

export default Signup