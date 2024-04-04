import { Helmet } from 'react-helmet-async';

import MyResearchView from '../sections/MyResearch/view/myresearch-view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> My Researches </title>
      </Helmet>

      <MyResearchView />
    </>
  );
}
