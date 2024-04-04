import { Helmet } from 'react-helmet-async';

import { AppView } from '../sections/ResearcherDashboard/view';
// import LandingPage from './LandingPage';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <AppView />
    </>
  );
}
