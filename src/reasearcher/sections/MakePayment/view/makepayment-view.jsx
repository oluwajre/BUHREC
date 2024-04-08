/*eslint-disable*/
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './pricinggrid.css'

import { usePaystackPayment } from 'react-paystack';

import axios from "axios"

const MakePaymentView = () => {
  

  const makePayment = async() =>{
    try{
      const res = await axios.post('http://localhost:5000/api/payForDocument', {email:'dada.stephenolamide@gmail.com'})


      console.log(res)

      if(res.status === 200){
        const paymentLink = res.data.authorization_url
         window.open(paymentLink, '_self');
      }
    }catch(e){
console.log(e)
    }
  }



  


// const verifyPayment =(ref)= async()=>{

//   const res = await axios.post(`http:localhost:5000/api/verify/${ref}`)

//   console.log(res)

//   const status = res.status
//   return status
// }

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')

  // if payment verifictaion is sucessful then now close
  // navigate him back

  // else show an error that there's an issue with oayment


  // const isVerified = verifyPayment()

  // if(isVerified === 200){
  //   // navigate the user
  // }

  // else{
  //    console.log("issue with oayment")
  // }

}

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







// /*eslint-disable*/


// import React from 'react';
// import { usePaystackPayment } from 'react-paystack';

// const config = {
//     reference: (new Date()).getTime().toString(),
//     email: "dada.stephenolamide@gmail.com",
//     amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
//     publicKey: 'sk_test_65973a577e38ab709fa68955a41fb14805e9d976',
// };

// // you can call this function anything
// const onSuccess = (reference) => {
//   // Implementation for whatever you want to do with reference and after success call.
//   console.log(reference);
// };

// // you can call this function anything
// const onClose = () => {
//   // implementation for  whatever you want to do when the Paystack dialog closed.
//   console.log('closed')
// }

// const PaystackHookExample = () => {
//     const initializePayment = usePaystackPayment(config);
//     return (
//       <div>
//           <button onClick={() => {
//               initializePayment(onSuccess, onClose)
//           }}>Paystack Hooks Implementation</button>
//       </div>
//     );
// };

// function App() {
//   return (
//     <div className="App">
//       <h1>Pay</h1>
//       <PaystackHookExample />
//     </div>
//   );
// }

// export default App;






























