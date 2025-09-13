// src/pages/AdminSettingsPage.jsx
import React from 'react';
import { CssBaseline, Container, Typography, Box, Card, CardContent, ThemeProvider } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import pinkTheme from '../../../../themes/pinkTheme';
import AdminProfileSettings from '../../components/settings/AdminProfileSettings';
import SiteGlobalSettings from '../../components/settings/SiteGlobalSettings';
import DashboardLayout from '../../components/dashboardLayout/DashboardLayout';

import './AdminSettingsPage.css';

const AdminSettingsPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
     <CssBaseline />
      <DashboardLayout title=" تنظیمات"  icon={SettingsOutlinedIcon}>
        <Card className="settings-card animated-fadein" sx={{ mb: 4 }}>
          <CardContent>
            <AdminProfileSettings />
          </CardContent>
        </Card>

        <Card className="settings-card animated-fadein">
          <CardContent>
            <SiteGlobalSettings />
          </CardContent>
        </Card>
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default AdminSettingsPage;
