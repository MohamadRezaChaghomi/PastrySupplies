import React from 'react'
import routes from './routes/routes'
import { useRoutes } from 'react-router-dom'
import NavbarAdmin from './features/dashboard admin/components/navbaradmin/NavBarAdmin'
import Sidebar from './features/dashboard admin/components/sidebar/Sidebar'
import './App.css';

export default function App() {
    let router = useRoutes(routes)
  
    return (
      <>
        <NavbarAdmin />
        <div className="mainLayout">
          <Sidebar />
          <div className="mainContent">
            {router}
          </div>
        </div>
      </>
    )
  }