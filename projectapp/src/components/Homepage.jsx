import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem, Button} from '@mui/material'
import React, { useState } from 'react';
import Image from './Image/image.jpg'
import { Link , useLocation} from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'



const Homepage = () => {

  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const home= { 
    position:'fixed',
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    zIndex:-1,
  }
  return (
  
    <div>
      <br /><br /><br />
      <img
          src={Image}
          alt='backkground'
          color='white'
          style={home}/>
            <AppBar style={{backgroundColor:"black"}}>
             <Toolbar>
            {
      <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" style={{width:"50px",height:"50px"}}>
        <img 
        style={{width:"50px",height:"50px"}}
        src="https://assets.eposnow.com/public/Uploads/lefteris-kallergis-NQZiQxuIyFk-unsplash__FocusFillWzMzNiwxNjEsInkiLDMyXQ.jpg" alt="background image" />
      </Avatar>
    }
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            <Typography variant='h4'>VOZZBEYA</Typography> &nbsp; &nbsp; &nbsp; &nbsp;
           &nbsp; &nbsp; &nbsp;
          <IconButton color="primary" onClick={handleMenuOpen} style={{ marginLeft: "auto", backgroundColor: '#181616' }}>
            <MenuIcon  style={{color:'white'}}/>
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose} >
              <Link to={'/Home'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/Login'} style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/Signup'} style={{ textDecoration: 'none', color: 'black' }}>Sign-up</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/Dashboard'} style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/Contact'} style={{ textDecoration: 'none', color: 'black' }}>Contact us</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/AboutUs'} style={{ textDecoration: 'none', color: 'black' }}>About</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/Indo'} style={{ textDecoration: 'none', color: 'black' }}>IndoFoods</Link>
            </MenuItem>
          </Menu>

       </Toolbar>
   </AppBar>
   

    </div>
  )
}
export default Homepage