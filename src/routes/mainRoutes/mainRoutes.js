import React from 'react';

export const userRoutes = [
  // Main route's default dashboard
  {
    redirectRoute: true,
    name: 'dashboardRedirect',
    path: '/',
    component: React.lazy(() => import('../../views/landingPage/LandingPage')),
  },
];
