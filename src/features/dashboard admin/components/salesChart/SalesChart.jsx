import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './SalesChart.css';

const data = [
  { name: 'فروردین', فروش: 4000 },
  { name: 'اردیبهشت', فروش: 3000 },
  { name: 'خرداد', فروش: 2000 },
  { name: 'تیر', فروش: 2780 },
  { name: 'مرداد', فروش: 1890 },
];

const SalesChart = () => {
  return (
    <Card className="sales-chart-card animated-card">
      <CardContent>
        <Typography className="sales-chart-title">نمودار فروش ماهانه</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ left: 20, right: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" reversed />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="فروش" stroke="#e91e63" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
