import * as React from 'react';
import { useState } from 'react';
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

  return (
    <> 
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {data.map((item) => (
        <ShowImage id={item.id}
                   img={item.urls.regular}
                   alt_description={item.alt_description}
                   width={item.width}
                   height={item.height}
                   imgAvatar={item.user.profile_image.small}
                   userName={item.user.name}
                   openModal={openModal}
        />
      ))}
    </ImageList>
    <ModalImage isOpen={isOpen} propToModal={propToModal} closeModal={closeModal}/>
    </>
  );
}
