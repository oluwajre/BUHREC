import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';
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
