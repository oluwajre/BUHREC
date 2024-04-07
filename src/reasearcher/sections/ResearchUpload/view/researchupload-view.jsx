// import { useState } from 'react';

// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

// import { products } from 'src/_mock/products';

// import ProductCard from '../product-card';
// import ProductSort from '../product-sort';
// import ProductFilters from '../product-filters';
// import ProductCartWidget from '../product-cart-widget';

// // ----------------------------------------------------------------------

// export default function ProductsView() {
//   const [openFilter, setOpenFilter] = useState(false);

//   const handleOpenFilter = () => {
//     setOpenFilter(true);
//   };

//   const handleCloseFilter = () => {
//     setOpenFilter(false);
//   };

//   return (
//     <Container>
//       <Typography variant="h4" sx={{ mb: 5 }}>
//         Products
//       </Typography>

//       <Stack
//         direction="row"
//         alignItems="center"
//         flexWrap="wrap-reverse"
//         justifyContent="flex-end"
//         sx={{ mb: 5 }}
//       >
//         <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
//           <ProductFilters
//             openFilter={openFilter}
//             onOpenFilter={handleOpenFilter}
//             onCloseFilter={handleCloseFilter}
//           />

//           <ProductSort />
//         </Stack>
//       </Stack>

//       <Grid container spacing={3}>
//         {products.map((product) => (
//           <Grid key={product.id} xs={12} sm={6} md={3}>
//             <ProductCard product={product} />
//           </Grid>
//         ))}
//       </Grid>

//       <ProductCartWidget />
//     </Container>
//   );
// }
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
import './upload.css'

export default function ResearchUploadView() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {

    if (!selectedFile) {
      toast.error('Add a File');
      return
    }
    else if (title === '') {
      toast.error('Add the Title of your Reserch');
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
        console.log('File uploaded successfully!');
        toast.success('File uploaded successfully!')
        setSelectedFile(null); // Clear file selection after successful upload
      } else {
        console.error('Upload failed!');
        toast.error('Upload a PDF file!')
      }
    };

   
  };

  return (
    <Container>
      <Typography variant="h4">Upload Research File</Typography>

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
        value={title}
        onChange={handleChangeTitle}
      />
      </Grid>
      </Grid>
      
      <Button 
        variant="contained" 
        style={{ backgroundColor: 'black', color: 'white', marginTop: '30px' }}
        onClick={handleUpload} 
        startIcon={<Iconify icon="eva:plus-fill" />}
        // disabled={!selectedFile}
        >
        Upload
      </Button>

    </Container>
  );
}
