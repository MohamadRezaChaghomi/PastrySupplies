// src/components/settings/AdminProfileSettings.jsx
import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

const AdminProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: 'ادمین سایت',
    email: 'admin@example.com',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // ارسال داده به سرور
    alert('اطلاعات ادمین ذخیره شد!');
  };

  return (
    <>
      <h3 style={{ color: '#e91e63', marginBottom: '16px' , direction: 'rtl' }}>مشخصات ادمین</h3>
      <Stack spacing={2}>
        <TextField
          label="نام"
          name="name"
          value={profile.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="ایمیل"
          name="email"
          value={profile.email}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          ذخیره تغییرات
        </Button>
      </Stack>
    </>
  );
};

export default AdminProfileSettings;
