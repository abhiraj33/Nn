import { Typography,Button, TextField } from '@mui/material'
import React, {} from 'react'

const Login = () => {
  return (
    <div style={{padding:"5px",color:"black"}}>

        <Typography variant="h2" gutterBottom>
            <br />
        Login Page
      </Typography>
      <TextField label="Customer Name:" 
      variant="outlined">
      </TextField>
      <br /><br />
      <TextField label="PhoneNo:" 
      variant="outlined">
      </TextField>
      <br /><br />
      <TextField label="Password:" 
      variant="outlined" type='password'>
      </TextField>
      <br /><br />
      <Button variant="contained">Login</Button>
    </div>
  )
  }


    


export default Login