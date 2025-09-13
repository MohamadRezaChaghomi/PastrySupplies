import React, { useState } from 'react';
import {
  TextField,
  Button,
  Stack,
  Box,
  Typography,
} from '@mui/material';
import './ProductForm.css';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data:', formData);
    alert('محصول با موفقیت ثبت شد!');
    setFormData({ name: '', description: '', price: '', category: '' });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{ direction: 'rtl' }}
    >
      {/* عنوان فرم با استایل جداگانه */}
      <Typography variant="h6" className="product-title">
        افزودن محصول
      </Typography>

      <Stack spacing={3}>
        <TextField
          label="نام محصول"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="توضیحات"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
        />
        <TextField
          label="قیمت (تومان)"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
          fullWidth
          inputProps={{ min: 0 }}
        />
        <TextField
          label="دسته‌بندی"
          name="category"
          value={formData.category}
          onChange={handleChange}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ alignSelf: 'flex-end' }}
        >
          ثبت محصول
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductForm;
