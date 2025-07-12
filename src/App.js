import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

import NavbarAdmin from './features/dashboard admin/components/navbaradmin/NavBarAdmin';
import Sidebar from './features/dashboard admin/components/sidebar/Sidebar';
import AppRoutes from './routes/AppRoutes';
import './App.css';

const theme = createTheme({
  direction: 'rtl',
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <NavbarAdmin />
          <div className="mainLayout">
            <Sidebar />
            <div className="mainContent">
              <div className="pageContent">
                <AppRoutes />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}