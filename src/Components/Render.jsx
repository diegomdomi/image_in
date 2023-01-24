import * as React from 'react';
import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ModalImage from './ModalImage';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import './imgStyles.css'
import  addToMyPhoto  from '../features/favoriteSlice';
import { useDispatch } from 'react-redux';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Render({data}) {
  const[propToModal, setPropToModal] = useState()
  const[isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch();

  const openModal = (img,description,profileImg,userName,width,height) => {
    setPropToModal({img,description,profileImg,userName,width,height});
    setIsOpen(true)
  }

  const closeModal =()=>setIsOpen(false)

//   function abrirLike(id,img,description,width,height) {
//     if (localStorage) {
//       let myFavorite;
//       if (!localStorage['myFavorite']) myFavorite = [];
//       else myFavorite= JSON.parse(localStorage['myFavorite']);            
//       if (!(myFavorite instanceof Array)) myFavorite = [];
//       if((myFavorite.find(user=>user.id === id))){
//         alert('this image is already saved in your favorites ')
//       }else{
//         myFavorite.push({id,img,description,width,height});
//         localStorage.setItem('myFavorite', JSON.stringify(myFavorite));
//         alert('image save in My Photos')
//       }
//     } 
// }

const sendToStore = (id,img,description,width,height) => {
  dispatch(addToMyPhoto({id,img,description,width,height}))
}

  return (
    <> 
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {data.map((item) => (
        <ImageListItem key={item.id} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.urls.regular, 121, item.rows, item.cols)}
            alt={item.alt_description}
            loading="lazy"
            onClick={() =>openModal(item.urls.regular,item.alt_description,item.user.profile_image.small,item.user.name,item.width,item.height)}
          />
        <ImageListItemBar
            title={item.alt_description}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              <CloudDownloadIcon/>
              <FavoriteBorderIcon  onClick={() =>sendToStore(item.id,item.urls.regular,item.alt_description,item.width,item.height)} className="like"/>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    <ModalImage isOpen={isOpen} propToModal={propToModal} closeModal={closeModal}/>
    </>
  );
}
