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
import CategoryForm from '../../components/addcategory/AddCategory';
import './NewCategory.css'; // اضافه کردن استایل

const NewCategoryPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 6, direction: 'rtl' }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        className="new-category-title"
      >
        <AddCircleOutlineOutlinedIcon className="new-category-icon" />
        <Typography className="new-category-title-text" variant="h4" component="h1">
          ایجاد دسته‌بندی 
        </Typography>
        </Stack>
        <div className="category-form-card">
          <CategoryForm />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default NewCategoryPage;
