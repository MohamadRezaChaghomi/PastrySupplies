import React from 'react';
import {CssBaseline,ThemeProvider} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import pinkTheme from '../../../../themes/pinkTheme';
import CategoryForm from '../../components/addcategory/AddCategory';
import './NewCategory.css';
import DashboardLayout from '../../components/dashboardLayout/DashboardLayout';

const NewCategoryPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
      <CssBaseline />
      <DashboardLayout title="ایجاد دسته بندی" icon={AddCircleOutlineOutlinedIcon}>
        <div className="category-form-card">
          <CategoryForm />
        </div>
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default NewCategoryPage;
