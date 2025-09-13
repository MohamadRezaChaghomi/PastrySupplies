// src/features/dashboard admin/pages/newproduct/NewProduct.jsx
import React from 'react';
import {
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import pinkTheme from '../../../../themes/pinkTheme';
import ProductForm from '../../components/addproduct/ProductForm';
import './NewProduct.css';
import DashboardLayout from '../../components/dashboardLayout/DashboardLayout';


import { Box } from '@mui/material';

const NewProductPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
      <CssBaseline />
      <DashboardLayout title="ایجاد محصول جدید" icon={AddCircleOutlineOutlinedIcon}>
        <Box className="product-form-card">
          <ProductForm />
        </Box>
      </DashboardLayout>
    </ThemeProvider>
  );
};
export default NewProductPage;
