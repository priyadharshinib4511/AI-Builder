import React from 'react';
import Sidebar from '../components/Topbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default RootLayout
