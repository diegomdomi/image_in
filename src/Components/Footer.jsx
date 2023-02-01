import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { fontFamily, fontSize } from '@mui/system';
import logo from '../Assets/imgLogo-removebg.png'
export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, }} >
      <AppBar position="static" sx={{ bgcolor: '#f52246', height: 150  }}>
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