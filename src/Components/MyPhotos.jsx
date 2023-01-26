import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {disLikePhoto,filterByDescription} from '../features/favoriteSlice'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Photo from './Photo'


const MyPhotos = () => {

  const [searchByDescription, setSearchByDescription] = useState (null)

  let {storeImg} =  useSelector((state) => state.favoriteImage);
  const dispatch = useDispatch()

  const deleteImage = (id) => {
    dispatch(disLikePhoto(id))
  }

  const handleInputChange = (e) => {
    if(e.target.name === 'searchDescription'){
      // setSearchByDescription(e.target.value)
    }
    dispatch(filterByDescription(e.target.value))
  }

  return (
    <>
   
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}> 
          <input  fullWidth label="search by description" id="fullWidth" style={{marginTop:'20px',width:'520px'}}  color="secondary" name="searchDescription" 
            onChange={handleInputChange}
          />
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