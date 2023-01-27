import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {disLikePhoto,filterByDescription} from '../features/favoriteSlice'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Photo from './Photo'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MyPhotos = () => {

  const [orderBy, setOrderBy] = useState('');

  const handleChange = (event) => {
    setOrderBy(event.target.value);
  };
  let {storeImg} =  useSelector((state) => state.favoriteImage);
  const dispatch = useDispatch()

  const deleteImage = (id) => {
    dispatch(disLikePhoto(id))
  }

  const handleInputChange = (e) => {
    if(e.target.name === 'searchDescription'){
      dispatch(filterByDescription(e.target.value));
    }
  }
 

  return (
    <>

   
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}> 
          <TextField  fullWidth label="search by description" id="fullWidth" style={{marginTop:'20px',width:'520px'}}  color="secondary" name="searchDescription" 
            onChange={handleInputChange}
          />
               <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={orderBy}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Date</MenuItem>
          <MenuItem value={20}>Likes</MenuItem>
          <MenuItem value={30}>Width</MenuItem>
          <MenuItem value={30}>Height</MenuItem>
        </Select>
      </FormControl>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {storeImg !== undefined && storeImg && storeImg.map((item)=>(  
              <Grid xs={2} sm={4} md={4} key={item.id}>
                <Photo key={item.id}
                       width={item.width}
                       height={item.height}
                       likes={item.likes}
                       id={item.id}
                       img={item.img} 
                       description={item.description}
                       date={item.today}
                       deleteImage={deleteImage}
                />
            </Grid>
            ))
          }
          </Grid>
        </Box>
      </Container>
    
  </>
  )
}

export default MyPhotos