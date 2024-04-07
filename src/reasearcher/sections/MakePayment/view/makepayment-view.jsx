/*eslint-disable*/
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './pricinggrid.css'

const MakePaymentView = () => {

  const navigate = useNavigate();

  const makePayment = () => {
    /*navigate to payment gateway*/
    navigate('/upload')
  };

  // return (
  //   <Box sx={{ width: '70%', height: '50%', p: 4, className: 'modal' }}>
  //   <Typography variant="h4">Payment Information</Typography>
  //   <div>
  //     <p>Note: If you are Bsc Holder, you are to pay: <Typography variant='h6' style={{display: 'inline-block'}}>₦10,000.00</Typography></p>
  //     <br />
  //     <p>Note: If you are Phd Holder, you are to pay: <Typography variant='h6' style={{display: 'inline-block'}}>₦20,000.00</Typography></p>
  //     <br />
  //     <p>Note: If you are Masters Holder, you are to pay: <Typography variant='h6' style={{display: 'inline-block'}}>₦30,000.00</Typography></p>
  //   </div>
  //   {/* Additional content, buttons, etc. */}
  //   <Button
  //   variant="contained"
  //   color="primary"
  //   onClick={makePayment}
  //   style={{marginTop: '20px'}}
  // >
  //   Make Payment
  // </Button>
  // </Box>
  // )
  const plans = [
    {
      name: 'Bsc Holder',
      price: '10,000',
    },
    {
      name: 'Phd Holder',
      price: '20,000',
      highlighted: true, // Flag for highlighting the Pro plan
    },
    {
      name: 'Masters Holder',
      price: '30,000',
    },
  ];

  return (
    <Box sx={{ width: '100%', height: '50%', p: 4, className: 'modal' }}>
      <Typography variant="h4">Payment Information</Typography>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
      <p><strong>Note:</strong></p>
      <p>Payment for a degree level different from your current degree level will not be approved.</p>
      <p>Payment Non-refundable</p>
      <Button
      variant="contained"
      color="primary"
      onClick={makePayment}
      className='button'
      style={{marginTop: '50px'}}
      >
      Make Payment
      </Button>
    </Box>
  );
};

const PricingCard = ({ plan }) => {
  const { name, price, highlighted } = plan;
  const cardStyle = highlighted ? 'pricing-card highlighted' : 'pricing-card';

  return (
    <div className={cardStyle}>
      <h3>{name}</h3>
      <p className="price">₦{price}</p>
      <ul>
      </ul>
    </div>
  );
}

export default MakePaymentView