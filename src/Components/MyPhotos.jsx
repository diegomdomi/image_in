import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {disLikePhoto,storeImg} from '../features/favoriteSlice'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Photo from './Photo'


const MyPhotos = () => {

let {storeImg} =  useSelector((state) => state.favoriteImage);
console.log(storeImg)
const dispatch = useDispatch()

const deleteImage = (id) => {
  dispatch(disLikePhoto(id))
}

  return (
    <>
   
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}> 
          <TextField  fullWidth label="search by description" id="fullWidth" style={{marginTop:'20px',width:'520px'}}  color="secondary" focused />
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