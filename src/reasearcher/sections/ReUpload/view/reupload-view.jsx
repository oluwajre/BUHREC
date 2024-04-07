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
import './upload.css';
// import { Modal, Fade } from '@mui/material';
// import styles from './largepopup.module.css';

export default function ReuploadView() {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {

    if (!selectedFile) {
      toast.error('Add the new File');
      return
    }
    else{
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
          justifyContent: 'space-evenly',
          p: 8, 
          border: '2px dashed #ccc', 
          mb: 5, 
        }}
      >

      <TextField
        type="file"
        variant="standard"
        onChange={handleFileChange}
        className='file-input'
        
      />
      </Box>
      <TextField
        type="text"
        label='Title of Research Document'
        id='title-input'
        disabled={true}
      />
      </Grid>
      </Grid>
      
      <Button 
        variant="contained" 
        style={{ backgroundColor: 'black', color: 'white',  marginTop: '30px' }}
        onClick={handleUpload} 
        startIcon={<Iconify icon="eva:plus-fill" />}
        // disabled={!selectedFile}
        >
        Re-Upload
      </Button>

    </Container>
  );
}