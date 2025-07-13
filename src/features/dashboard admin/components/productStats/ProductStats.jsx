import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const ProductStats = () => {
  const stats = [
    { title: 'محصولات فعال', value: 120 },
    { title: 'محصولات تمام شده', value: 45 },
    { title: 'محصولات جدید', value: 20 },
  ];

  return (
    <Grid container spacing={2}>
      {stats.map((stat, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ direction: 'rtl', textAlign: 'right' }}>
            <CardContent>
              <Typography variant="subtitle1">{stat.title}</Typography>
              <Typography variant="h5" color="primary">{stat.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductStats;
