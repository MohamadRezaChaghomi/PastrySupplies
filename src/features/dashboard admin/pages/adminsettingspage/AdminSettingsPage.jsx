// src/pages/AdminSettingsPage.jsx
import React from 'react';
import { CssBaseline, Container, Typography, Box, Card, CardContent, ThemeProvider } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import pinkTheme from '../../../../themes/pinkTheme';
import AdminProfileSettings from '../../components/settings/AdminProfileSettings';
import SiteGlobalSettings from '../../components/settings/SiteGlobalSettings';

import './AdminSettingsPage.css';

const AdminSettingsPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 6, direction: 'rtl' }}>
        <Box className="admin-settings-title">
          <SettingsOutlinedIcon className="settings-icon" />
          <Typography variant="h4" className="settings-title-text">تنظیمات</Typography>
        </Box>

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
      </Container>
    </ThemeProvider>
  );
};

export default AdminSettingsPage;
