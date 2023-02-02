import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import logo from '../Assets/imgLogo-removebg.png'
export default function Footer() {
  return (
    <Box  >
      <AppBar position="static" sx={{ bgcolor: ' #efb810',mt:5 }}>
      <Box justifyContent={'center'} alignItems='center' display={'flex'} flexDirection='column'
      sx={{
        margin:'40px 0px',
        fontSize:'15px',
      }}>
      <div>Design & Develop <img src={logo} alt='logo' />Diego M. Dominguez</div>
      <div>© 2023 image_surfing</div>
            
        </Box>
      </AppBar>
    </Box>
  );
}