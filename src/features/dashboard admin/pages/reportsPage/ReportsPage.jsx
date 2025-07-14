import React from 'react';
import DashboardLayout from '../../components/dashboardLayout/DashboardLayout';
import SalesChart from '../../components/salesChart/SalesChart';
import ProductStats from '../../components/productStats/ProductStats';
import CategoryStats from '../../components/categoryStats/CategoryStats';

const ReportsPage = () => {
  return (
    <DashboardLayout title=" گزارشات">
      <SalesChart />
      <ProductStats />
      <CategoryStats />
    </DashboardLayout>
  );
};

export default ReportsPage;
