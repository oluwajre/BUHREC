/* eslint-disable */
import { Helmet } from 'react-helmet-async';

import MakePaymentView from '../sections/MakePayment/view/makepayment-view';
import React from 'react'

const MakePayment = () => {
  return (
    <>
    <Helmet>
      <title> Make Payment </title>
    </Helmet>
    <MakePaymentView />
  </>
  )
}

export default MakePayment