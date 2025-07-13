// src/components/ProductForm.jsx
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import CategorySelect from './CategorySelect';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const categories = ['کیک', 'شیرینی خشک', 'شیرینی تر', 'دسر', 'بیسکوییت'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price, category, description };
    console.log('محصول جدید:', product);
    // TODO: ارسال به بک‌اند
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#fff0f5' }}>
      <Typography variant="h5" mb={2} color="primary" align="right">
        افزودن محصول جدید
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="نام محصول"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="قیمت (تومان)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          margin="normal"
          type="number"
          required
        />
        <CategorySelect
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        <TextField
          fullWidth
          label="توضیحات"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
        >
          ثبت محصول
        </Button>
      </Box>
    </Paper>
  );
};

export default ProductForm;
