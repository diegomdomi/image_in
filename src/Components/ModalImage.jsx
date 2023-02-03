import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:{xs:'60%',sm:'45%',md:'25%',lg:'25%'},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: 4,
};



export default function ModalImage({isOpen,propToModal=true,closeModal}) {
  const {img,description, userName,profileImg} = propToModal

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
      >
      <Box  display={'flex'} flexDirection='column'
        sx={style}
      >
      <CloseIcon onClick={closeModal}/>
        <div className="modal">
          <p className="modalDescription"> 
            {description}
          </p>
            <img src={img} alt={description} style={{width:'100%'}}/>
          <Box display={'flex'} flexDirection='row' alignItems='center' sx={{mt:2}}>
            <Avatar
              alt={userName}
              src={profileImg}
            />
            <p style={{marginLeft:'10px'}}>{userName}</p>
          </Box>
        </div>
      </Box>
      </Modal>
    </div>
  );
}