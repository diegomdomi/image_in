import * as React from 'react';
import { useState } from 'react';
import { Container } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ModalImage from './ModalImage';
import './imgStyles.css'
import ShowImage from './ShowImage';



export default function Render({data}) {
  
  const[propToModal, setPropToModal] = useState()
  const[isOpen, setIsOpen] = useState(false)

  const openModal = (img,description,profileImg,userName,width,height) => {
    setPropToModal({img,description,profileImg,userName,width,height});
    setIsOpen(true)
  }
  const closeModal =()=>setIsOpen(false)

  return (
    <> 
   <Container> 
    <ImageList
    gap={12}
    sx={{mb:8,
    gridTemplateColumns:
    'repeat(auto-fill, minmax(180px, 1fr)) !important'
    }}
      // sx={{ width: 500, height: 450 }}
      // variant="quilted"
      // cols={4}
      // rowHeight={121}
    >
      {data.map((item) => (
        <ShowImage id={item.id}
                   img={item.urls.small}
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
    </Container>
    </>
  );
}
