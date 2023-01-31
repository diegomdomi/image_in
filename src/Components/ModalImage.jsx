import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import './imgStyles.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalImage({isOpen,propToModal=true,closeModal}) {
  const {img,description, userName,profileImg} = propToModal

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
      >
      <Box sx={style}>
        <CloseIcon onClick={closeModal}/>
        <div className="modal">
          <p className="modalDescription"> 
            {description}
          </p>
            <img src={img} alt={description} style={{maxWidth:'350px'}}/>
          <div className="avatar">
            <Avatar
              alt={userName}
              src={profileImg}
            />
            <p>{userName}</p>
          </div>
        </div>
      </Box>
      </Modal>
    </div>
  );
}