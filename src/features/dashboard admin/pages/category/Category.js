// src/pages/CategoryListPage.jsx
import React from 'react';
import { CssBaseline, Container, Typography, Stack } from '@mui/material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { ThemeProvider } from '@mui/material/styles';
import pinkTheme from '../../../../themes/pinkTheme';
import VirtualizedTable from '../../components/table/Table';

const categoryColumns = [
  { id: 'name', label: 'نام دسته‌بندی', minWidth: 200 },
  { id: 'description', label: 'توضیحات', minWidth: 300 },
];

const categories = [
  { id: 1, name: 'کیک و شیرینی', description: 'انواع کیک و شیرینی خانگی' },
  { id: 2, name: 'نوشیدنی‌ها', description: 'آبمیوه و نوشیدنی‌های سرد و گرم' },
  { id: 3, name: 'شکلات و آبنبات', description: 'انواع شکلات‌ها و آبنبات‌ها' },
  // میتونی بیشتر اضافه کنی
];

const CategoryListPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 6, direction: 'rtl' }}>
        <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1} sx={{ mb: 2 }}>
          <Typography variant="h4" color="primary">
            دسته‌بندی‌ها
          </Typography>
          <CategoryOutlinedIcon color="primary" fontSize="large" />
        </Stack>
        <VirtualizedTable columns={categoryColumns} data={categories} height={400} />
      </Container>
    </ThemeProvider>
  );
};

export default CategoryListPage;
