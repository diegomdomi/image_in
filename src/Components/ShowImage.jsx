import React from 'react'
import { saveAs } from 'file-saver';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useDispatch } from 'react-redux';
import { addToMyPhoto } from '../features/favoriteSlice';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function srcset(img, size, rows = 1, cols = 1) {
    return {
      src: `${img}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${img}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const ShowImage = ({id,img,alt_description,width,height,imgAvatar,userName,openModal,likes,urlFull}) => {
    const [open, setOpen] = React.useState(false);

    let now = new Date();
    let today = now.toLocaleString()

  const dispatch = useDispatch();
  const sendToStore = (id,img,description,width,height,likes,urlFull) => {
      dispatch(addToMyPhoto({id,img,description,width,height,today,likes,urlFull}))
      setOpen(true);
    }

    
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    const saveFile = () => {
      saveAs(urlFull, `${id}.jpg`);
  }

  return (
      <ImageListItem key={id} > 
      <img
        {...srcset(img, 121, img.rows, img.cols)}
        alt={alt_description}
        loading="lazy"
        onClick={() =>openModal(img,alt_description,imgAvatar,userName)}
      />
      <ImageListItemBar
      // title={alt_description}
      actionIcon={
      <IconButton
        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
      >
      <CloudDownloadIcon onClick={saveFile} />
      <Button  onClick={() =>sendToStore(id,img,alt_description,width,height,likes,urlFull)} className="like">
      <FavoriteBorderIcon  sx={{ color: 'red' }}/>
      </Button>
      </IconButton>
      }
      />
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} >
          <Alert  severity="success" sx={{ width: '100%',my:100 }}>
            Image saved in 'My Photos'!
          </Alert>
      </Snackbar>
    </ImageListItem>
  )
}

export default ShowImage