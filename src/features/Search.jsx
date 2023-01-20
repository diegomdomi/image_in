import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Render from '../Components/Render'
import front from '../front.jpg'
import './search.css';
import { imageAsync,selectImg } from './imageSlice';

export const Search = () => {

  const img = useSelector(selectImg)
  const dispatch = useDispatch();
 
useEffect(() => {
dispatch(imageAsync())
}, [dispatch])


  return (
    <>
      <div>
        <form>
          <input className="inputSearch" placeholder="Search you image"/>
        </form>
      </div>
      <div className='frontImg' >
        <img src={front} alt='search' style={{height:'480px', width:'100%'}}></img>
      </div>
        <Render props={img}/>
    </>

  );
}