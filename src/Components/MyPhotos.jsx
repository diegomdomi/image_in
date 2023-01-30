import React from 'react'
import { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {filterByDescription} from '../features/favoriteSlice'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Photo from './Photo'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { height } from '@mui/system';

const MyPhotos = () => {
  const {storeImg} =  useSelector((state) => state.favoriteImage);

  const [orderBy, setOrderBy] = useState(storeImg);
  const [option, setOption] = useState('');

  useEffect(() => {
    setOrderBy(storeImg)
  },[storeImg])
  

  const dispatch = useDispatch()

  const handleChange = (event) => {
    
    const sortDirection = event.target.value
    setOption(sortDirection)
    const newArr = [...orderBy]

    newArr.sort((a,b)=>{
      if (sortDirection === 'date' ){
       return  a.date - b.date
      }else if (sortDirection === 'likes') {
        return a.likes - b.likes
      }else if(sortDirection === 'width') {
        return a.width - b.width
      }else if(sortDirection === 'height'){
        return a.height - b.height
      }
    })
    setOrderBy(newArr)
    ;
  };


  const handleInputChange = (e) => {
    let inputChange = e.target.value
    if(e.target.name === 'searchDescription'){
    dispatch(filterByDescription(inputChange));
  }
    if(inputChange === '' || inputChange !== ''){
      setOption('')
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
          name='serchBy'
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={option}
          onChange={handleChange}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'date'}>Date</MenuItem>
          <MenuItem value={'likes'}>Likes</MenuItem>
          <MenuItem value={'width'}>Width</MenuItem>
          <MenuItem value={'height'}>Height</MenuItem>
        </Select>
      </FormControl>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {orderBy!== undefined && orderBy && orderBy.map((item)=>(  
              <Grid xs={2} sm={4} md={4} key={item.id}>
                <Photo key={item.id}
                       width={item.width}
                       height={item.height}
                       likes={item.likes}
                       id={item.id}
                       img={item.img} 
                       description={item.description}
                       date={item.today}
                       urlFull={item.urlFull}
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