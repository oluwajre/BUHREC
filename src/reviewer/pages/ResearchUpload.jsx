/* eslint-disable */
import { Helmet } from 'react-helmet-async';


import ResearchUploadView from '../sections/ResearchUpload/view/researchupload-view';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Upload Research Document </title>
      </Helmet>
      <ResearchUploadView />
    </>
  );
}
