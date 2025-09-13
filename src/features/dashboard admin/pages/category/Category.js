import React from 'react';
import { CssBaseline, Container, Typography, Card, CardContent, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import pinkTheme from '../../../../themes/pinkTheme';
import VirtualizedTable from '../../components/table/Table';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import DashboardLayout from '../../components/dashboardLayout/DashboardLayout';

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
      <DashboardLayout title="دسته بندی ها" icon={CategoryOutlinedIcon}>
        <Card className="category-table-card animated-fadein">
          <CardContent>
            <VirtualizedTable columns={categoryColumns} data={categories} height={400} />
          </CardContent>
        </Card>
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default CategoryListPage;
