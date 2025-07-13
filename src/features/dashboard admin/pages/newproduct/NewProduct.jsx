// src/pages/AddProductPage.jsx
import React from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  Stack,
  ThemeProvider
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import pinkTheme from '../../../../themes/pinkTheme';
import ProductForm from '../../components/addproduct/ProductForm';

const AddProductPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 6, direction: 'rtl' }}>
        <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1} sx={{ mb: 2 }}>
          <Typography variant="h4" color="primary">
            ایجاد محصول
          </Typography>
          <AddCircleOutlineOutlinedIcon color="primary" fontSize="large" />
        </Stack>
        <ProductForm />
      </Container>
    </ThemeProvider>
  );
};

export default AddProductPage;
