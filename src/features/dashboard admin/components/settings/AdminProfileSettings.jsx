import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import './AdminProfileSettings.css';

const AdminProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('اطلاعات ادمین ذخیره شد!');
  };

  return (
    <>
      <h3 className="admin-profile-title">مشخصات ادمین</h3>
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
