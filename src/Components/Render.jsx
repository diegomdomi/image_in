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


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Render({data}) {
  const[propToModal, setPropToModal] = useState()
  const[isOpen, setIsOpen] = useState(false)

  const openModal = (img,description,profileImg,userName,width,height) => {
    setPropToModal({img,description,profileImg,userName,width,height});
    setIsOpen(true)
  }

  const closeModal =()=>setIsOpen(false)

  let imgStore=[]
  const abrirLike=(img,description,width,height)=>{
    imgStore.push({img,description,width,height})
    localStorage.setItem('myFavorite', JSON.stringify(imgStore))
    alert('image save in My Photos')
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
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <CloudDownloadIcon/>
                <FavoriteBorderIcon  onClick={() =>abrirLike(item.urls.regular,item.alt_description,item.width,item.height)} className="like"/>
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

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];