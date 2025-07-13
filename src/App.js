// src/App.js
import React from 'react';
import NavbarAdmin from './features/dashboard admin/components/navbaradmin/NavBarAdmin';
import Sidebar from './features/dashboard admin/components/sidebar/Sidebar';
import AppRoutes from './routes/AppRoutes';
import './App.css';

// افزودن موارد مربوط به MUI Theme و RTL
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import pinkTheme from './themes/pinkTheme';

// ساخت cache برای راست‌چین
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

// ترکیب تم صورتی با RTL
const rtlTheme = createTheme({
  ...pinkTheme,
  direction: 'rtl',
});

export default function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        <CssBaseline />
        <NavbarAdmin />
        <div className="mainLayout" dir="rtl">
          <Sidebar />
          <div className="mainContent">
            <div className="pageContent">
              <AppRoutes />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
