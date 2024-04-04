/* eslint-disable */
import { Helmet } from 'react-helmet-async';

import { ReUploadView } from '../sections/MyResearch/view';

// ----------------------------------------------------------------------

export default function ReUploadPage() {
  return (
    <>
      <Helmet>
        <title> Re Upload Research </title>
      </Helmet>
      <ReUploadView />
    </>
  );
}