import React from 'react'
import { useState } from 'react';
import { saveAs } from 'file-saver';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ModalEditDescription from './ModalEditDescription';
import { disLikePhoto } from '../features/favoriteSlice';
import { useDispatch } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';


const Photo = ({id,likes,img,width,height,description,date,urlFull}) => {

  const[isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const editDescription = () =>{
      setIsOpen(true)
  }

  const closeModal =()=>setIsOpen(false)

  const saveFile = () => {
    saveAs(urlFull, `${id}.jpg`);
  }

  const deleteImage = (id) => {
    dispatch(disLikePhoto(id))
  }
  
  return (
    <div>
      <ImageListItem key={id} sx={{px:2}}>
        <Card sx={{marginTop:10,mb:{md:10,xs:1}}}>
            <CardMedia
              sx={{ height:300 }}
              image={img}
              id={id}
            />
            <CardContent sx={{height:250}}>
              <Typography variant="body1" color="text.secondary">
                <h5>{description}</h5> 
                <h4>width:  {width}  px</h4>
                <h4>height: {height} px</h4>
                <h4>{date}</h4>
                <h4><ThumbUpAltIcon/> {likes}</h4>
              </Typography>
            </CardContent>
            <CardActions>
              <Tooltip title="Edit Description">
                <Button size="small" onClick={editDescription}>Edit description</Button>
              </Tooltip>
              <Tooltip title="Download">
                <Button size="small"><CloudDownloadIcon  onClick={saveFile}/></Button>
              </Tooltip>
              <Tooltip title="Delete">
                <Button size="small" ><DeleteForeverIcon onClick={()=>deleteImage(id)}/></Button>
              </Tooltip>
            </CardActions>
          <ModalEditDescription isOpen={isOpen} img={img}  closeModal={closeModal} id={id}/>
        </Card>
      </ImageListItem>
    </div>
  )
}

export default Photo