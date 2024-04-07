/*eslint-disable*/
import { Helmet } from 'react-helmet-async';

import CertificateView from '../sections/Certificate/view/certificate-view';
import React from 'react'

const CertificatePage = () => {
  return (
    <>
    <Helmet>
      <title> Certificate </title>
    </Helmet>
    <CertificateView />
  </>
  )
}

export default CertificatePage