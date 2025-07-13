import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

const DashboardLayout = ({ title, children }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, direction: 'rtl' }}>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1, 
          mb: 3, 
          color: 'primary.main',
          textAlign: 'right',
          justifyContent: 'flex-end',
        }}
      >
        <Typography variant="h4" component="h1" fontWeight="bold">
          {title}
        </Typography>
        <AssessmentOutlinedIcon fontSize="large" />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {children}
      </Box>
    </Container>
  );
};

export default DashboardLayout;
