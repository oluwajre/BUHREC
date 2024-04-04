/* eslint-disable */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Iconify from 'src/components/iconify';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
// import { Modal, Fade } from '@mui/material';
// import styles from './largepopup.module.css';

export default function ReuploadView() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
//   const modalContent = (
//     <Box sx={{ width: '70%', height: '50%', bgcolor: 'background.paper', p: 4, className: styles.modal }}>
//       {/* Your popup content here */}
//       <Typography variant="h5">Payment Information</Typography>
//       <p>Your file has been uploaded successfully.</p>
//       {/* Additional content, buttons, etc. */}
//       <Button
//       variant="contained"
//       color="primary"
//       onClick={() => window.location.href = "www.amazon.com"} // Redirect on click
//     >
//       Make Payment
//     </Button>
//     </Box>
//   );

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {

    if (!selectedFile) {
      toast.error('Upload a File');
      return
    }
    else{
      setOpen(true);
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      // Replace "http://your-server.com/upload" with your actual upload endpoint
      const response = await fetch('http://your-server.com/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('File re-uploaded successfully!');
        toast.success('File re-uploaded successfully!')
        setSelectedFile(null); // Clear file selection after successful upload
      } else {
        console.error('Re-Upload failed!');
        toast.error('Re-Upload failed!')
      }
    };

   
  };

  return (
    <Container>
      <Typography variant="h4">Re - Upload Research File</Typography>

      <Grid container spacing={2}>
      <Grid item xs={12} md={6}> {/* Span full width on small screens, half on medium */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 4, // Padding for the box
          border: '1px solid #ccc', // Optional border
          borderRadius: 4, // Optional rounded corners
          mb: 3, // Margin bottom for spacing
        }}
      >

      <TextField
        type="file"
        variant="standard"
        onChange={handleFileChange}
        label="Select File"
        fullWidth
        margin="normal"
        sx={{ '& .MuiInputBase-root': { border: 'none' } }}
      />
      </Box>
      </Grid>
      </Grid>
      
      <Button 
        variant="contained" 
        style={{ backgroundColor: 'black', color: 'white' }}
        onClick={handleUpload} 
        startIcon={<Iconify icon="eva:plus-fill" />}
        // disabled={!selectedFile}
        >
        Re-Upload
      </Button>

      {/* <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      
    >
      <Fade in={open}>
        {modalContent}
      </Fade>
    </Modal> */}
    </Container>
  );
}