import { Navigate, RouteObject } from 'react-router-dom';
import { RouteNames } from './route-names';
import UsersPage from '../components/Pages/UsersPage/UsersPage';
import React from 'react';
import ProfilePage from '../components/Pages/ProfilePage/ProfilePage';

const routes: RouteObject[] = [
  {
    path: RouteNames.Users,
    element: <UsersPage />,
  },
  {
    path: RouteNames.Profile,
    element: <ProfilePage />,
  },
  {
    path: `/profile`,
    element: <Navigate to="/profile/1" />,
  },
  {
    path: '*',
    element: <Navigate to={RouteNames.Users} />,
  },
];

export default routes;
