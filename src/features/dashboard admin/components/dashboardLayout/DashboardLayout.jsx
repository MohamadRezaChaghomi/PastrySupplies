import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import './DashboardLayout.css';

const DashboardLayout = ({ title, icon: Icon, children }) => {
  return (
    <Container className="dashboard-container">
      <Box className="dashboard-header">
        <Typography className="dashboard-title" component="h1" variant="h4">
          {Icon && <Icon fontSize="large" sx={{ mr: 1, color: 'primary.main' }} />}
          {title}
        </Typography>
      </Box>
      <Box className="dashboard-content">
        {children}
      </Box>
    </Container>
  );
};

export default DashboardLayout;
