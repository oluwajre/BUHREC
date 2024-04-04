import { Helmet } from 'react-helmet-async';

// import { UserView } from 'src/sections/user/view';
import PaymentPage from '../sections/ResearchPayment/view/payment-view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Research Document Payment History</title>
      </Helmet>

      <PaymentPage />
    </>
  );
}
