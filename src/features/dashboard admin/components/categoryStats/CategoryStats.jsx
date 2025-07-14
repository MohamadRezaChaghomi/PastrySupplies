import React from 'react';
import { Card, CardContent, Typography, useTheme } from '@mui/material';
import './CategoryStats.css';

const categories = [
  { name: 'الکترونیکی', count: 50 },
  { name: 'پوشاک', count: 30 },
  { name: 'زیبایی', count: 15 },
  { name: 'خانه و آشپزخانه', count: 25 },
  { name: 'ورزش و سفر', count: 10 },
];

const CategoryStats = () => {
  const theme = useTheme();

  return (
    <Card className="category-stats-card animated-fadein">
      <CardContent>
        <Typography
          className="category-stats-title"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            textShadow: `1px 1px 2px ${theme.palette.secondary.main}`,
          }}
        >
          آمار دسته‌بندی‌ها
        </Typography>
        <ul className="category-list">
          {categories.map((cat, index) => (
            <li key={index} className="category-list-item">
              <strong>{cat.name}</strong> — تعداد محصولات: {cat.count}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CategoryStats;
