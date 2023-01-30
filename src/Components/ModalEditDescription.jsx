import React from 'react'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { editDescription } from '../features/favoriteSlice';
import { useDispatch } from 'react-redux';

const ModalEditDescription = ({isOpen,closeModal,id}) => {
    const [description, setDescription] = useState ()
const dispatch = useDispatch()

const registerChangeInput =(e)=>{
    if(e.target.name === 'inputChange'){
        setDescription(e.target.value)
    }
}

const handleChangeDescription = (id,description)=>{
    dispatch(editDescription({id,description}))
    closeModal()

}
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit description
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input name='inputChange' onChange={registerChangeInput}></input>
          <Button onClick={()=>handleChangeDescription(id,description)}>Confirm</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalEditDescription