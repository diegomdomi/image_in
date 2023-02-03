import React from 'react'
import { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import {filterByDescription} from '../features/favoriteSlice'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Photo from './Photo'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ImageList from '@mui/material/ImageList';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ilustration from '../Assets/Image viewer-amico.svg'


const MyPhotos = () => {
let {storeImg} =  useSelector((state) => state.favoriteImage);

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
  };

  const handleInputChange = (e) => {
    let inputChange = e.target.value
    if(e.target.name === 'searchDescription'){
    dispatch(filterByDescription(inputChange));
  }

  if(inputChange=== '' || inputChange !== ''){
    setOption('')
  }
  }
 
  return (
    <>
      <Box sx={{mt:20,ml:{xs:0,md:5}}}>
          <TextField  fullWidth label="search by description" id="fullWidth" style={{marginLeft:'55px',width:'60%'}}  color="secondary" name="searchDescription" 
            onChange={handleInputChange}
        />
        <FormControl variant="standard" sx={{ mx: 8,mt:1 ,minWidth: '120px' }}>
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
      <ImageList
          gap={15}
          sx={{mx:6,
          gridTemplateColumns:
          'repeat(auto-fill, minmax(280px, 1fr)) !important'
       }}
      >
        {orderBy.length === 0 ? 
        <Typography  color="text.secondary" sx={{fontSize:{xs:15,md:25},mt:{xs:5,md:10,sm:1},ml:{xs:1}}} >
          You does not have any favorite pic yet
          ...Go to <Link to='/'><h4>menu</h4></Link>
         <img src={ilustration} alt='ilustration' /> 
        </Typography>
         : orderBy.map((item)=>(  
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
              ))}
      </ImageList>
      </Box>
  </>
  )
}

export default MyPhotos