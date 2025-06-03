import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import '../style/Layout.css';

const Layout = ({ nav: NavComponent, backgroundClass = '' }) => {
  return (
    <div className={`page-container ${backgroundClass}`}>
      {NavComponent && <NavComponent />}
      <div className="content-wrap">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
