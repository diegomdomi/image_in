import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Render from '../../Components/Render'

import { imageAsync,selectImg } from './imageSlice';

export const Search = () => {

  const img = useSelector(selectImg)
  const dispatch = useDispatch();
 
// useEffect(() => {
// dispatch(imageAsync())
// }, [dispatch])


  return (
    <>

        <button
          onClick={() => dispatch(imageAsync())}
        >
          imgAsync
        </button>
        <Render props={img}/>
    </>

  );
}
