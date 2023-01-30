import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Render from '../Components/Render'
import front from '../Assets/front.jpg'
import './search.css';
import { imageAsync } from '../features/imageSlice';
import { Button } from '@mui/material';
import diafragma from '../Assets/imgdiafragma.png'

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
    <div className="main-container">
      <div className='frontImg' >
        <img src={front} alt='search' style={{height:'480px', width:'100%'}}></img>
      </div>
      <div className="input-container">
        <input className="inputSearch" placeholder="Search your image" name="searchImg" onChange={catchInputField}/>
        {/* <span id="icon">
        <img src={diafragma} alt='diafrafma' className="iconDiafragma" style={{width:'25px'}} />
      </span> */}
        <Button onClick={sendQuery} style={{backgroundColor:'darkorange', color:'black', fontWeight:'bolder', marginLeft:'8px'}}  >search</Button>
      </div>
    </div>
      <Render/>
    </>

  );
}