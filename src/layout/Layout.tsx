import React from 'react';
import AppRouter from '../routes/AppRouter';
import Sidebar from '../components/Containers/Sidebar/Sidebar';
import './layout.scss';

const Layout = () => {
  return (
    <div className="app-layout">
      <div className="app-layout__content">
        <Sidebar />
        <div className="app-layout__page">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default Layout;
