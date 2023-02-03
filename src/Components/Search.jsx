import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Render from '../Components/Render'
import './search.css';
import { imageAsync } from '../features/imageSlice';
import { Button,Box,Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useSelector } from 'react-redux';


const Search = () => {

const [inputSearch, setInputSearch] = useState(null)
const [ value, setValue ] = useState(1);
const dispatch = useDispatch();

const {loading, error} = useSelector(state => state.imageStock)

const handleChangePage = (e, valu) => {
    dispatch(imageAsync({inputSearch,valu}))
    setValue(valu);
}

  const catchInputField = (e) =>{
    if(e.target.name === 'searchImg'){
      setInputSearch(e.target.value)
    }
  }
 
  const sendQuery = () =>{
    dispatch(imageAsync({inputSearch,value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(imageAsync({inputSearch,value}))
  }
  

  useEffect(() => {
    dispatch(imageAsync({inputSearch,value}))
    }, [dispatch])

  return (
    <>
    <Grid container>
    <div className="main-container">
      <Grid item xs={12} sm={8} md={6} sx={{mt:{sm:15,md:15},ml:{sm:20}}} >
        <Box m={6}>
        <div className="title-container" >
          <h1>Surf, Travel and Download your favorite Pictures from <span className='image-surfing'> Image_surfing</span></h1>
          <p className="description-container">We provide a simple and easy-to-use platform for downloading images. Start downloading images today 
          and take the first step towards creating beautiful and engaging content.</p>
        </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={6}  sx={{mt:{sm:5,lg:17},ml:{sm:20 }}}>
        <Box m={5} >
      <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input className="inputSearch" placeholder="Search your image" name="searchImg" onChange={catchInputField}/>
      <Button onClick={sendQuery} style={{backgroundColor:'#ffc300', color:'black', fontWeight:'bolder', marginLeft:'8px'}}  >surf</Button>
      </form>
      </div>
        </Box>
      </Grid>
    </div>
    </Grid>
      <Render />
    {
      !loading && !error &&
      <Box justifyContent={'center'} alignItems='center' display={'flex'}
        sx={{margin:'20px 0px'}}>
      <Pagination page={value} onChange={handleChangePage} count={10} variant="outlined" color="primary" />
      </Box>
    }
    </>

  );
}

export default Search