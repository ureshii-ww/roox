import React from 'react';
import AppRouter from '../routes/AppRouter';
import Sidebar from '../components/Containers/Sidebar/Sidebar';

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <AppRouter />
    </div>
  );
};

export default Layout;
