import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const categories = [
  { name: 'الکترونیکی', count: 50 },
  { name: 'پوشاک', count: 30 },
  { name: 'زیبایی', count: 15 },
];

const CategoryStats = () => {
  return (
    <Card sx={{ direction: 'rtl', textAlign: 'right' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>آمار دسته‌بندی‌ها</Typography>
        <List>
          {categories.map((cat, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={cat.name}
                secondary={`تعداد محصولات: ${cat.count}`}
                sx={{ textAlign: 'right' }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CategoryStats;
