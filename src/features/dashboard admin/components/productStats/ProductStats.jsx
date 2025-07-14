import React from 'react';
import { Grid, Card, CardContent, Typography, useTheme } from '@mui/material';
import './ProductStats.css';

const stats = [
  { title: 'محصولات فعال', value: 120, description: 'تعداد محصولات فعال موجود در فروشگاه' },
  { title: 'محصولات تمام شده', value: 45, description: 'محصولاتی که موجودی آنها به پایان رسیده' },
  { title: 'محصولات جدید', value: 20, description: 'محصولات اضافه شده در ماه جاری' },
  { title: 'محصولات پر فروش', value: 15, description: 'محصولاتی که بیشترین فروش را داشتند' },
  { title: 'محصولات در انتظار', value: 5, description: 'محصولاتی که در صف تایید قرار دارند' },
  { title: 'محصولات تخفیف‌خورده', value: 10, description: 'محصولاتی که تخفیف ویژه دارند' },
];

const ProductStats = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={3} className="product-stats-grid">
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className="product-stat-card animated-fadein">
            <CardContent>
              <Typography
                className="product-stat-title"
                sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
              >
                {stat.title}
              </Typography>
              <Typography
                className="product-stat-value"
                sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}
                variant="h5"
              >
                {stat.value}
              </Typography>
              <Typography
                className="product-stat-description"
                sx={{ mt: 1, color: '#555', fontSize: '0.9rem', direction: 'rtl' }}
              >
                {stat.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductStats;
