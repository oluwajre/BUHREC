/*eslint-disable*/
import React, { useRef } from 'react';
import styles from './certificateGenerator.module.css'
import { Button } from '@mui/material';
import { fDate } from 'src/utils/format-time';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const CertificateView = () => {

    const certificateRef = useRef(null);

    const handlePrint = () => {
      const certificateContent = certificateRef.current; // Access the element
      certificateContent.focus(); // Focus the element for browser print functionality
      window.print(); // Trigger the print dialog
    };

    let certificateData = { 
        name: 'Ajayi Adeoluwa', 
        title:'The Vast Improvement in Agriculture due to Technology', 
        dateOfConductStart: '11/01/2024', 
        dateOfConductEnd: '12/01/2024', 
        signature: 'assets/signature.png', 
        signatureDetails: 'Dr. Allan Adegoke (Chief Reviewer)' 
    }
    return (
        <>
         <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            p: 2, 
            border: '1px solid #ccc', 
            mb: 2,
            width: '120px',
            }}
      >
       <Typography variant='h5'><Link to='/resarches'>Back</Link></Typography> 
       </Box>
       
      <div className={styles.certificateWrapper} ref={certificateRef}>
        <div className={styles.certificateContainer}>
          <div className={styles.certificateImage}><img src="/assets/logo.svg" alt="" /></div>

          <h1>CERTIFICATE OF APPROVAL</h1>

          <span className={styles.smallText}>This certificate is proudly awarded to</span>

          <p className={styles.primaryItalicText}>{certificateData.name}</p>

          <span className={styles.smallText}>for successfully getting approved on the Research Topic</span>

          <h2>{certificateData.title}</h2>

          <span className={styles.smallText}>{`conducted from ${
            certificateData.dateOfConductStart ? fDate(certificateData.dateOfConductStart) : '-'
          } to ${certificateData.dateOfConductEnd ? fDate(certificateData.dateOfConductEnd) : '-'}`}</span>

          <div className={styles.signatureBlock}>
            <img className={styles.signatureImage} src={certificateData.signature} alt='' />

            <span className={styles.horizontalBar} />

            <span className={styles.smallText}>{certificateData.signatureDetails}</span>
          </div>
        </div>
        <Button
        style={{ marginTop: ' 3rem', backgroundColor: '#4066ff', color: 'white'}}
        onClick={handlePrint}
        >
            Download PDF
        </Button>

      </div>
    </>
      );
}

export default CertificateView