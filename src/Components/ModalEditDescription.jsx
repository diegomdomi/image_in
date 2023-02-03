import React from 'react'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { editDescription } from '../features/favoriteSlice';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';


const ModalEditDescription = ({isOpen,closeModal,id,img}) => {

const [description, setDescription] = useState ()
const dispatch = useDispatch()

const registerChangeInput =(e)=>{
  if(e.target.name === 'inputChange'){
      setDescription(e.target.value)
    }
  }

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(editDescription({id,description}))
  closeModal()
}

const handleChangeDescription = (id,description)=>{
  dispatch(editDescription({id,description}))
  closeModal()
}
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width:{xs:'70%',sm:'45%',md:'20%',lg:'20%'},
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style} display={'flex'} flexDirection='column' >
      <CloseIcon onClick={closeModal} sx={{mb:2}}/>
        <img src={img} alt={description} />
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mt:1}}>
            Edit description
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <input name='inputChange' onChange={registerChangeInput}/>
          </form>
          <Button onClick={()=>handleChangeDescription(id,description)}>Confirm</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalEditDescription