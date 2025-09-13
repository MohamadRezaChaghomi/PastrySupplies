import React from 'react';
import DashboardLayout from '../../components/dashboardLayout/DashboardLayout';
import SalesChart from '../../components/salesChart/SalesChart';
import ProductStats from '../../components/productStats/ProductStats';
import CategoryStats from '../../components/categoryStats/CategoryStats';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import {
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import pinkTheme from '../../../../themes/pinkTheme';


const ReportsPage = () => {
  return (
  <ThemeProvider theme={pinkTheme}>
    <CssBaseline />
      <DashboardLayout title="گزارشات"  icon={AssessmentOutlinedIcon}>
        <SalesChart />
        <ProductStats />
        <CategoryStats />
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default ReportsPage;
