import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import './imgStyles.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalImage({isOpen,propToModal=true,closeModal}) {
  // const [open, setOpen] = React.useState(false);

  // const handleClose = () => { 
  //   setOpen(false);
  // }
  return (
      <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal">
          <p className="modalDescription"> 
            {propToModal.description}
          </p>
            <img src={propToModal.img} alt='pic' style={{width:'350px'}}/>
          <div className="avatar">
            <Avatar
              alt={propToModal.userName}
              src={propToModal.profileImg}
              sx={{ width: 50, height: 50 }}
            />
              <p>{propToModal.userName}</p>
          </div>
          </div>
        </Box>
    
      </Modal>
    </div>
  );
}