/* eslint-disable */
import { Helmet } from 'react-helmet-async';

import { ReuploadView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function ReUploadPage() {
  return (
    <>
      <Helmet>
        <title> Re Upload Research </title>
      </Helmet>
      <ReuploadView />
    </>
  );
}