/* eslint-disable */
import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

//Researcher Dashboard Layout
import ResearcherDashboardLayout from 'src/reasearcher/layouts/dashboard';

//Reviewer Dashboard Layout (Uncomment Below)
// import ReviewerDashboardLayout from 'src/reviewer/layouts/dashboard';

export const LandingPage = lazy(() => import('src/static/pages/LandingPage'));
export const SignUpPage = lazy(() => import('src/static/pages/SignUpPage'));
export const LoginPage = lazy(() => import('src/static/pages/login'));
// export const IndexPage = lazy(() => import('src/pages/app'));
export const ReasearcherDashboardPage = lazy(() => import('src/reasearcher/pages/ResearcherDashboard'))
export const MyResearchPage = lazy(() => import('src/reasearcher/pages/MyResearch'));
export const ResearchPaymentHistoryPage = lazy(() => import('src/reasearcher/pages/ResearchPayment'));
export const ResearchUploadPage = lazy(() => import('src/reasearcher/pages/ResearchUpload'));
export const ReuploadPage = lazy(() => import('src/reasearcher/pages/ReUploadPage'));
export const Page404 = lazy(() => import('src/static/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: <LandingPage />,
      index: true
    },
    {
      element: (
        <ResearcherDashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </ResearcherDashboardLayout>
      ),
      children: [
        // { element: <IndexPage />, index: true },
        { path: 'dashboard', element: <ReasearcherDashboardPage /> },
        { path: 'payments', element: <ResearchPaymentHistoryPage /> },
        { path: 'upload', element: <ResearchUploadPage /> },
        { path: 'resarches', element: <MyResearchPage /> },
        { path: 'reupload', element: <ReuploadPage />},
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignUpPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
