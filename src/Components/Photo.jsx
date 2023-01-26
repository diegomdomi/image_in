import React from 'react'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ModalEditDescription from './ModalEditDescription';

const Photo = ({id,likes,img,width,height,description,deleteImage,date}) => {
    
    const[isOpen, setIsOpen] = useState(false)

    const editDescription = () =>{
        setIsOpen(true)
    }
    const closeModal =()=>setIsOpen(false)
  return (
    <div>
        <Card sx={{marginTop:10, maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 380 }}
                    image={img}
                    id={id}
                  />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  <h4>width: {width} px</h4>
                  <h4>height: {height} px</h4>
                  <h4>{date}</h4>
                  <h4><ThumbUpAltIcon /> {likes}</h4>
                  </Typography>
                </CardContent>
              <CardActions>
                <Button size="small" onClick={editDescription}>Edit description</Button>
                <Button size="small">
                <CloudDownloadIcon/>
                </Button>
                <Button size="small" onClick={()=>deleteImage(id)}>
                <FavoriteBorderIcon />
                </Button>
              </CardActions>
            </Card>
            <ModalEditDescription isOpen={isOpen} myDescription={description} closeModal={closeModal} id={id}/>
    </div>
  )
}

export default Photo