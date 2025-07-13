import React from 'react';
import NavbarAdmin from './features/dashboard admin/components/navbaradmin/NavBarAdmin';
import Sidebar from './features/dashboard admin/components/sidebar/Sidebar';
import AppRoutes from './routes/AppRoutes';
import './App.css';

export default function App() {
  return (
    <>
          <NavbarAdmin />
          <div className="mainLayout">
            <Sidebar />
            <div className="mainContent">
              <div className="pageContent">
                <AppRoutes />
              </div>
            </div>
          </div>
    </>
  );
}