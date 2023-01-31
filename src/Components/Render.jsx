import * as React from 'react';
import { useState } from 'react';
import { Container } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ModalImage from './ModalImage';
import './imgStyles.css'
import ShowImage from './ShowImage';
import { useSelector } from 'react-redux';



export default function Render() {
  
  const[propToModal, setPropToModal] = useState()
  const[isOpen, setIsOpen] = useState(false)
  
  const openModal = (img,description,profileImg,userName) => {
    setPropToModal({img,description,profileImg,userName});
    setIsOpen(true)
  }
  const closeModal =()=>setIsOpen(false)
  const storeImg= useSelector(state=>state.imageStock.list)
  console.log(storeImg);
  
  return (
    <> 
   {/* <Container>  */}
    <ImageList
      gap={20}
      sx={{m:6,
      gridTemplateColumns:
      'repeat(auto-fill, minmax(280px, 1fr)) !important'
    }}
    >
      {storeImg.map((item) => (
        <ShowImage id={item.id}
                   img={item.urls.small_s3}
                   urlFull={item.urls.full}
                   alt_description={item.alt_description}
                   width={item.width}
                   height={item.height}
                   imgAvatar={item.user.profile_image.small}
                   userName={item.user.name}
                   likes={item.likes}
                   openModal={openModal}
        />
      ))}
    </ImageList>
    <ModalImage isOpen={isOpen} propToModal={propToModal} closeModal={closeModal}/>
    {/* </Container> */}
    </>
  );
}
