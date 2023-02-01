import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import imgDiaframe from '../Assets/1logo.png'
import { useLocation } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = () => {
  const location = useLocation();

  const mainRoute = location.pathname

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"  sx={{ bgcolor: '#000000' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, ml:{lg:10}}}
          >
          {/* <div>
            <p style={{fontFamily:'Teko', fontSize:'25px',letterSpacing:'1.5px'}}> image_surfing</p>
          </div> */}
          <Link to="/">
            <img className='imgLogo' style={{width:'170px'}} src={imgDiaframe} alt='logo'/>
          </Link> 
          </Typography>
          <div className='navMenu'>
            <Link to={mainRoute === '/' ? '/myphotos' : '/'} style={{textDecoration:'none'}}>
              <Button  sx={{backgroundColor:'#f52246', color:'white', fontWeight:'bolder'}}>
                <Typography  color="inherit" component="div">
                {mainRoute === '/' ? ' MY photos' : 'Menu'}
                </Typography>
              </Button>
            </Link> 
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar