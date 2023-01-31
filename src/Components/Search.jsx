import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Render from '../Components/Render'
import './search.css';
import { imageAsync } from '../features/imageSlice';
import { Button,Box,Grid,Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

export const Search = () => {

  const [inputSearch, setInputSearch] = useState(null)

// useEffect(() => {
// dispatch(imageAsync(inputSearch))
// }, [])

  const catchInputField = (e) =>{
    if(e.target.name === 'searchImg'){
      setInputSearch(e.target.value)
    }
  }
  const dispatch = useDispatch();
 
  const sendQuery = () =>{
    dispatch(imageAsync(inputSearch))
  }

  return (
    <>
    {/* <CssBaseline /> */}
    <Grid container>
    <div className="main-container">
      <Grid item xs={12} sm={8} md={6} sx={{mt:{sm:15,md:15},ml:{sm:20}}} >
        <Box m={6}>
        <div className="title-container" >
          <h1>Surf, Travel and Download your favorite Pictures from <span> Image_surfing</span></h1>
          <p className="description-container">We provide a simple and easy-to-use platform for downloading images. Start downloading images today 
          and take the first step towards creating beautiful and engaging content.</p>
        </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={6}  sx={{mt:{sm:5,lg:17},ml:{sm:20 }}}>
        <Box m={5} >
      <div className="input-container">
        <input className="inputSearch" placeholder="Search your image" name="searchImg" onChange={catchInputField}/>
        <Button onClick={sendQuery} style={{backgroundColor:'darkorange', color:'black', fontWeight:'bolder', marginLeft:'8px'}}  >search</Button>
      </div>

        </Box>
      </Grid>
    </div>
    </Grid>
      <Render/>
    </>

  );
}