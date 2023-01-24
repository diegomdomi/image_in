import React from 'react'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useDispatch } from 'react-redux';
import  {addToMyPhoto } from '../features/favoriteSlice';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }
const ShowImage = ({id,img,alt_description,width,height,imgAvatar,userName,openModal}) => {
    const dispatch = useDispatch();
    const sendToStore = (id,img,description,width,height) => {
        dispatch(addToMyPhoto({id,img,description,width,height}))
      }

  return (
    <ImageListItem key={id} cols={img.cols || 1} rows={img.rows || 1}>
        <img
        {...srcset(img, 121, img.rows, img.cols)}
        alt={alt_description}
        loading="lazy"
        onClick={() =>openModal(img,alt_description,imgAvatar,userName,width,height)}
        />
    <ImageListItemBar
      title={alt_description}
      actionIcon={
        <IconButton
          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
        >
        <CloudDownloadIcon/>
        <FavoriteBorderIcon  onClick={() =>sendToStore(id,img,alt_description,width,height)} className="like"/>
        </IconButton>
      }
    />
  </ImageListItem>
  )
}

export default ShowImage