import { Link, Typography ,Button} from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <div>
        <br /><br /><br /><br />
        <Typography variant='h2' style={{color:"pink"}}><Link to={'./Home'}></Link> Welcome to VOZZBEYA </Typography>

        <Button variant="text" gutterBottom>
       <br />
       
      </Button> &nbsp; &nbsp;
    </div>
  )
}

export default Home