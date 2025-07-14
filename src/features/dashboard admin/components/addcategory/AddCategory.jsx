import React, { useState } from 'react';
import {
  TextField,
  Button,
  Stack,
  Box,
  Typography,
} from '@mui/material';
import './AddCategory.css';

const CategoryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Category Data:', formData);
    alert('دسته‌بندی با موفقیت ثبت شد!');
    setFormData({ name: '', description: '' });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{ direction: 'rtl' }}
    >
      {/* 🔽 عنوان بالا فرم */}
      <Typography
        className="new-category-title-text"
        variant="h6"
        sx={{ mb: 3 }}
      >
        افزودن دسته‌بندی
      </Typography>

      <Stack spacing={3}>
        <TextField
          label="نام دسته‌بندی"
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          ثبت دسته‌بندی
        </Button>
      </Stack>
    </Box>
  );
};

export default CategoryForm;
