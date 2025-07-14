// src/features/dashboard admin/pages/newproduct/NewProduct.jsx
import React from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  Stack,
  ThemeProvider,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import pinkTheme from '../../../../themes/pinkTheme';
import ProductForm from '../../components/addproduct/ProductForm';
import './NewProduct.css';


const NewProductPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 6, direction: 'rtl' }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          className="new-product-title"
        >
          <AddCircleOutlineOutlinedIcon className="new-product-icon" />
          <Typography className="new-product-title-text" variant="h4" component="h1">
            ایجاد محصول جدید
          </Typography>
        </Stack>
        <div className="product-form-card">
          <ProductForm />
        </div>
      </Container>
    </ThemeProvider>
  );
};
export default NewProductPage;
