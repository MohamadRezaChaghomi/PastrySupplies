// src/components/CategorySelect.jsx
import React from 'react';
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material';

const CategorySelect = ({ category, setCategory, categories }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="category-label">دسته‌بندی</InputLabel>
      <Select
        labelId="category-label"
        value={category}
        label="دسته‌بندی"
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
