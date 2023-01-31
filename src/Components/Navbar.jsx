import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import imgDiaframe from '../Assets/1logo.png'
import { red } from '@mui/material/colors';

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

export default function Navbar() {



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
          <Link to="/">
            <img className='imgLogo' style={{width:'170px'}} src={imgDiaframe} alt='logo'/>
          </Link> 
          </Typography>
          <div className='navMenu'>
            <Link to="/myphotos">
              <Button>
                <Typography variant="h6" color="inherit" component="div"
                  sx={{ flexGrow: 1, alignSelf: 'flex-end',textDecoration:'none',fontSize:{xs:15,md:20}}}
                >
                  MY photos
                </Typography>
              </Button>
            </Link>
            <Link to="/">
              <Button>
              <Typography variant="h6" color="inherit" component="div"
                  sx={{ flexGrow: 1, alignSelf: 'flex-end',textDecoration:'none', display:{xs:'none',md:'block'}}}
                >
                 Menu
                 </Typography>
              </Button>
            </Link>
          </div>

     
        </Toolbar>
      </AppBar>
    </Box>
  );
}
