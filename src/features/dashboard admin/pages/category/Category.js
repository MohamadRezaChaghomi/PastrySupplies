import React from 'react';
import { CssBaseline, Container, Typography, Card, CardContent, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import pinkTheme from '../../../../themes/pinkTheme';
import VirtualizedTable from '../../components/table/Table';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

import './Category.css';

const categoryColumns = [
  { id: 'name', label: 'نام دسته‌بندی', minWidth: 200 },
  { id: 'description', label: 'توضیحات', minWidth: 300 },
];

const categories = [
  { id: 1, name: 'کیک و شیرینی', description: 'انواع کیک و شیرینی خانگی' },
  { id: 2, name: 'نوشیدنی‌ها', description: 'آبمیوه و نوشیدنی‌های سرد و گرم' },
  { id: 3, name: 'شکلات و آبنبات', description: 'انواع شکلات‌ها و آبنبات‌ها' },
];

const CategoryListPage = () => {
  return (
    <ThemeProvider theme={pinkTheme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 6, direction: 'rtl' }}>
        <Box className="category-list-title">
          <CategoryOutlinedIcon className="category-icon" />
          <Typography variant="h4" component="h1" className="category-title-text">
            دسته‌بندی‌ها
          </Typography>
        </Box>

        <Card className="category-table-card animated-fadein">
          <CardContent>
            <VirtualizedTable columns={categoryColumns} data={categories} height={400} />
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default CategoryListPage;
